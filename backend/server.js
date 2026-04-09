const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const fs = require('fs');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Ensure uploads directory exists
if (!fs.existsSync('./uploads')) {
    fs.mkdirSync('./uploads');
}

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

// Models
const GallerySchema = new mongoose.Schema({
    src: { type: String, required: true },
    alt: { type: String, required: true },
    cat: { type: String, required: true, default: 'All' },
    createdAt: { type: Date, default: Date.now }
});

const GalleryItem = mongoose.model('GalleryItem', GallerySchema);

// Multer Setup for Image Uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

// Auth Middleware
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.status(401).json({ message: 'Access Denied' });

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: 'Invalid Token' });
        req.user = user;
        next();
    });
};

// Routes

// Login Route
app.post('/api/auth/login', async (req, res) => {
    const { username, password } = req.body;

    // Using simple hardcoded admin for now as requested
    if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
        const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '24h' });
        return res.json({ token, username });
    }

    res.status(401).json({ message: 'Invalid credentials' });
});

// Gallery Routes
app.get('/api/gallery', async (req, res) => {
    try {
        const items = await GalleryItem.find().sort({ createdAt: -1 });
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post('/api/gallery', authenticateToken, upload.single('image'), async (req, res) => {
    try {
        const { alt, cat } = req.body;
        const imageUrl = `/uploads/${req.file.filename}`;

        const newItem = new GalleryItem({
            src: imageUrl,
            alt,
            cat
        });

        await newItem.save();
        res.status(201).json(newItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.delete('/api/gallery/:id', authenticateToken, async (req, res) => {
    try {
        const item = await GalleryItem.findById(req.params.id);
        if (!item) return res.status(404).json({ message: 'Item not found' });

        // Delete physical file
        const filePath = path.join(__dirname, item.src);
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }

        await GalleryItem.findByIdAndDelete(req.params.id);
        res.json({ message: 'Item deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
