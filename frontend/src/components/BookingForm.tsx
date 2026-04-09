import { useState } from "react";
import { Car } from "lucide-react";

const BookingForm = () => {
    const [tab, setTab] = useState("Outstation");
    const [tripType, setTripType] = useState("One Way");
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        from: "",
        to: "",
        date: new Date().toISOString().split('T')[0],
        time: "12:00",
        vehicle: "SEDAN"
    });

    const vehicles = [
        { name: "SEDAN", price: "14", icon: <Car className="w-5 h-5 text-gold" /> },
        { name: "SUV", price: "19", icon: <Car className="w-5 h-5 text-gold" /> },
        { name: "INNOVA", price: "20", icon: <Car className="w-5 h-5 text-gold" /> },
        { name: "SEDAN CNG", price: "13", icon: <Car className="w-5 h-5 text-green-500" /> },
        { name: "CRYSTA", price: "22", icon: <Car className="w-5 h-5 text-gold" /> },
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const message = `*SPS Travels - Booking Enquiry*\n--------------------------\n*Service:* ${tab}\n*Type:* ${tripType}\n*Name:* ${formData.name}\n*Mobile:* ${formData.mobile}\n*From:* ${formData.from}\n*To:* ${formData.to}\n*Date:* ${formData.date}\n*Time:* ${formData.time}\n*Vehicle:* ${formData.vehicle}`;
        const whatsappUrl = `https://wa.me/919342991455?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
    };

    return (
        <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden max-w-2xl mx-auto border border-gray-100">
            {/* Header Tabs - Neat & Classy */}
            <div className="flex bg-gray-50/50 p-2">
                {["Outstation", "Tours", "Rental"].map((t) => (
                    <button
                        key={t}
                        onClick={() => setTab(t)}
                        className={`flex-1 py-4 text-xs font-black tracking-[0.2em] uppercase transition-all rounded-xl ${tab === t ? "text-primary bg-white shadow-sm" : "text-gray-400 hover:text-gray-600"}`}
                    >
                        {t}
                    </button>
                ))}
            </div>

            <div className="p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Trip Selection */}
                    <div className="flex items-center justify-center gap-10 border-b border-gray-50 pb-8">
                        {["One Way", "Round Trip"].map((type) => (
                            <label key={type} className="flex items-center gap-3 cursor-pointer group">
                                <input
                                    type="radio"
                                    className="peer hidden"
                                    checked={tripType === type}
                                    onChange={() => setTripType(type)}
                                />
                                <div className="w-5 h-5 border-2 border-gray-200 rounded-full peer-checked:border-gold peer-checked:bg-gold transition-all relative">
                                    <div className="absolute inset-1 bg-white rounded-full scale-0 peer-checked:scale-100 transition-transform"></div>
                                </div>
                                <span className={`text-[10px] font-black tracking-widest uppercase transition-colors ${tripType === type ? "text-gray-900" : "text-gray-400"}`}>{type}</span>
                            </label>
                        ))}
                    </div>

                    {/* Inputs Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                        <div className="space-y-1">
                            <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest px-1">Name</label>
                            <input
                                type="text"
                                placeholder="E.g. John Doe"
                                required
                                className="w-full bg-transparent border-b border-gray-100 focus:border-gold py-2 text-sm outline-none transition-all placeholder:text-gray-200 font-medium"
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest px-1">Mobile</label>
                            <input
                                type="tel"
                                placeholder="+91 00000 00000"
                                required
                                className="w-full bg-transparent border-b border-gray-100 focus:border-gold py-2 text-sm outline-none transition-all placeholder:text-gray-200 font-medium"
                                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest px-1">From</label>
                            <input
                                type="text"
                                placeholder="City or Airport"
                                required
                                className="w-full bg-transparent border-b border-gray-100 focus:border-gold py-2 text-sm outline-none transition-all placeholder:text-gray-200 font-medium"
                                onChange={(e) => setFormData({ ...formData, from: e.target.value })}
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest px-1">To</label>
                            <input
                                type="text"
                                placeholder="Destination"
                                required
                                className="w-full bg-transparent border-b border-gray-100 focus:border-gold py-2 text-sm outline-none transition-all placeholder:text-gray-200 font-medium"
                                onChange={(e) => setFormData({ ...formData, to: e.target.value })}
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest px-1">Date</label>
                            <input
                                type="date"
                                className="w-full bg-transparent border-b border-gray-100 focus:border-gold py-2 text-sm outline-none transition-all font-medium"
                                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                value={formData.date}
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest px-1">Time</label>
                            <input
                                type="time"
                                className="w-full bg-transparent border-b border-gray-100 focus:border-gold py-2 text-sm outline-none transition-all font-medium"
                                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                                value={formData.time}
                            />
                        </div>
                    </div>

                    {/* Vehicle Class Selector */}
                    <div>
                        <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest px-1 mb-6 block text-center">Class Selection</label>
                        <div className="flex flex-wrap justify-center gap-4">
                            {vehicles.map((v) => (
                                <button
                                    key={v.name}
                                    type="button"
                                    onClick={() => setFormData({ ...formData, vehicle: v.name })}
                                    className={`px-4 py-3 rounded-xl border transition-all flex items-center gap-3 min-w-[120px] ${formData.vehicle === v.name ? "border-gold bg-gold/5 shadow-sm" : "border-gray-50 bg-gray-50/20 hover:border-gray-100"}`}
                                >
                                    <div className={`transition-all ${formData.vehicle === v.name ? "scale-110 opacity-100" : "opacity-40"}`}>{v.icon}</div>
                                    <div className="flex flex-col items-start">
                                        <span className={`text-[8px] font-black tracking-widest uppercase leading-none ${formData.vehicle === v.name ? "text-gray-900" : "text-gray-400"}`}>{v.name}</span>
                                        <span className="text-[7px] text-gold font-bold mt-0.5">₹{v.price}/KM</span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-navy-deep text-white font-black text-xs tracking-[0.4em] py-6 rounded-2xl hover:bg-gold transition-all duration-700 uppercase shadow-2xl shadow-navy-deep/20 mt-4"
                    >
                        Confirm Estimation
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BookingForm;
