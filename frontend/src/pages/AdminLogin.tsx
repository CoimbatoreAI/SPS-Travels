import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Phone, Lock, User } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const AdminLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem("adminToken", data.token);
                navigate("/admin/dashboard");
            } else {
                setError(data.message || "Login failed");
            }
        } catch (err) {
            setError("Server connection failed");
        }
    };

    return (
        <main className="min-h-screen flex items-center justify-center bg-navy-deep section-padding">
            <div className="container-wide max-w-md w-full">
                <div className="glass-dark p-8 rounded-2xl border border-gold/20 shadow-2xl">
                    <SectionHeading subtitle="Secure Access" title="Admin Login" light />

                    <form onSubmit={handleLogin} className="space-y-6 mt-8">
                        <div className="space-y-2">
                            <label className="text-primary-foreground/70 text-sm flex items-center gap-2">
                                <User className="w-4 h-4 text-gold" /> Username
                            </label>
                            <input
                                type="email"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full bg-background/5 border border-primary-foreground/10 rounded-lg px-4 py-3 text-primary-foreground focus:border-gold outline-none transition-all"
                                placeholder="admin@spstravels.com"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-primary-foreground/70 text-sm flex items-center gap-2">
                                <Lock className="w-4 h-4 text-gold" /> Password
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-background/5 border border-primary-foreground/10 rounded-lg px-4 py-3 text-primary-foreground focus:border-gold outline-none transition-all"
                                placeholder="••••••••"
                                required
                            />
                        </div>

                        {error && <p className="text-red-400 text-sm text-center">{error}</p>}

                        <button
                            type="submit"
                            className="w-full gold-gradient text-primary font-bold py-4 rounded-xl hover-shine transition-all"
                        >
                            Login to Dashboard
                        </button>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-primary-foreground/40 text-xs">
                            This area is restricted to authorized personnel only.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AdminLogin;
