import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Plus, Trash2, LogOut, Image as ImageIcon, CheckCircle, AlertCircle } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

interface GalleryItem {
    _id: string;
    src: string;
    alt: string;
    cat: string;
}

const AdminDashboard = () => {
    const [images, setImages] = useState<GalleryItem[]>([]);
    const [file, setFile] = useState<File | null>(null);
    const [alt, setAlt] = useState("");
    const [cat, setCat] = useState("Vehicles");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ type: "", text: "" });
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("adminToken");
        if (!token) {
            navigate("/admin/login");
        } else {
            fetchImages();
        }
    }, [navigate]);

    const fetchImages = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/gallery`);
            const data = await response.json();
            setImages(data);
        } catch (err) {
            console.error("Failed to fetch images");
        }
    };

    const handleUpload = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!file) {
            setMessage({ type: "error", text: "Please select an image" });
            return;
        }

        setLoading(true);
        const formData = new FormData();
        formData.append("image", file);
        formData.append("alt", alt);
        formData.append("cat", cat);

        const token = localStorage.getItem("adminToken");

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/gallery`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                body: formData,
            });

            if (response.ok) {
                setMessage({ type: "success", text: "Image uploaded successfully!" });
                setFile(null);
                setAlt("");
                fetchImages();
            } else {
                setMessage({ type: "error", text: "Upload failed" });
            }
        } catch (err) {
            setMessage({ type: "error", text: "Server error" });
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!window.confirm("Are you sure you want to delete this image?")) return;

        const token = localStorage.getItem("adminToken");

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/gallery/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.ok) {
                setImages(images.filter((img) => img._id !== id));
                setMessage({ type: "success", text: "Image deleted successfully" });
            }
        } catch (err) {
            setMessage({ type: "error", text: "Delete failed" });
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("adminToken");
        navigate("/admin/login");
    };

    return (
        <main className="min-h-screen bg-background section-padding">
            <div className="container-wide">
                <div className="flex justify-between items-center mb-12">
                    <SectionHeading subtitle="Admin Panel" title="Gallery Management" />
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 bg-red-500/10 text-red-500 px-6 py-2 rounded-lg font-bold hover:bg-red-500 hover:text-white transition-all"
                    >
                        <LogOut className="w-4 h-4" /> Logout
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Upload Form */}
                    <div className="lg:col-span-1">
                        <div className="glass-card p-6 rounded-2xl border border-gold/10">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <Plus className="w-5 h-5 text-gold" /> Add New Image
                            </h3>

                            <form onSubmit={handleUpload} className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-muted-foreground">Select Image</label>
                                    <label className="border-2 border-dashed border-muted-foreground/20 rounded-xl p-8 flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-gold/50 transition-all">
                                        <ImageIcon className="w-8 h-8 text-gold" />
                                        <span className="text-xs text-muted-foreground">
                                            {file ? file.name : "Click to choose file"}
                                        </span>
                                        <input
                                            type="file"
                                            className="hidden"
                                            onChange={(e) => setFile(e.target.files?.[0] || null)}
                                            accept="image/*"
                                        />
                                    </label>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-muted-foreground">Alt Text (Description)</label>
                                    <input
                                        type="text"
                                        value={alt}
                                        onChange={(e) => setAlt(e.target.value)}
                                        className="w-full bg-muted/50 border border-border rounded-lg px-4 py-2 text-sm focus:border-gold outline-none"
                                        placeholder="e.g. Luxury Tempo Traveller in Pondicherry"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-muted-foreground">Category</label>
                                    <select
                                        value={cat}
                                        onChange={(e) => setCat(e.target.value)}
                                        className="w-full bg-muted/50 border border-border rounded-lg px-4 py-2 text-sm focus:border-gold outline-none"
                                    >
                                        <option value="Vehicles">Vehicles</option>
                                        <option value="Tours">Tours</option>
                                        <option value="Trips">Trips</option>
                                    </select>
                                </div>

                                {message.text && (
                                    <p className={`text-xs flex items-center gap-2 ${message.type === "success" ? "text-green-500" : "text-red-500"}`}>
                                        {message.type === "success" ? <CheckCircle className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                                        {message.text}
                                    </p>
                                )}

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full gold-gradient text-primary font-bold py-3 rounded-lg hover-shine disabled:opacity-50"
                                >
                                    {loading ? "Uploading..." : "Upload Image"}
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Image List */}
                    <div className="lg:col-span-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {images.map((img) => (
                                <div key={img._id} className="glass-card rounded-xl overflow-hidden group">
                                    <div className="relative aspect-video">
                                        <img
                                            src={`${import.meta.env.VITE_API_URL}${img.src}`}
                                            alt={img.alt}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                            <button
                                                onClick={() => handleDelete(img._id)}
                                                className="bg-red-500 p-3 rounded-full text-white hover:scale-110 transition-transform"
                                                title="Delete Image"
                                            >
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="p-3">
                                        <p className="text-xs font-bold text-foreground truncate">{img.alt}</p>
                                        <span className="text-[10px] bg-muted px-2 py-0.5 rounded text-muted-foreground">{img.cat}</span>
                                    </div>
                                </div>
                            ))}
                            {images.length === 0 && (
                                <div className="col-span-2 py-20 text-center text-muted-foreground">
                                    <ImageIcon className="w-12 h-12 mx-auto mb-4 opacity-20" />
                                    <p>No images uploaded yet.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AdminDashboard;
