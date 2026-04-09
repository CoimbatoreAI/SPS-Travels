import { Phone } from "lucide-react";
import { WhatsAppIcon } from "./Icons";

const FloatingButtons = () => (
  <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
    <a
      href="https://wa.me/919677792455?text=Hi%2C%20I%20would%20like%20to%20book%20a%20cab"
      target="_blank"
      rel="noopener noreferrer"
      className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-pulse-gold"
      aria-label="WhatsApp"
    >
      <WhatsAppIcon className="w-8 h-8 text-primary-foreground" />
    </a>
    <a
      href="tel:+919677792455"
      className="w-14 h-14 rounded-full gold-gradient flex items-center justify-center shadow-lg hover:scale-110 transition-transform md:hidden"
      aria-label="Call Now"
    >
      <Phone className="w-6 h-6 text-primary" />
    </a>
  </div>
);

export default FloatingButtons;
