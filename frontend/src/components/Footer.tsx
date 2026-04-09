import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-navy-deep text-primary-foreground">
    <div className="container-wide section-padding">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="mb-4">
            <img src="/logo.png" alt="SPS Travels" className="h-12 w-auto" />
          </div>
          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            Premium cab & tour service in Pondicherry. Reliable, comfortable, and affordable travel across Tamil Nadu.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4 text-gold">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/services", label: "Services" },
              { to: "/gallery", label: "Gallery" },
              { to: "/contact", label: "Contact" },
            ].map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-primary-foreground/70 hover:text-gold transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4 text-gold">Premium Routes</h4>
          <ul className="space-y-2 text-xs text-primary-foreground/70 uppercase tracking-widest font-bold">
            <li>Chennai → Madurai</li>
            <li>Chennai → Rameshwaram</li>
            <li>Chennai → Bangalore</li>
            <li>Chennai → Kerala Special</li>
            <li>Chennai → Palakkad</li>
            <li>Pondy → Bangalore</li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4 text-gold">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex flex-col gap-1 text-primary-foreground/70">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a href="tel:+919677792455" className="hover:text-gold transition-colors">+91 9677792455</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a href="tel:+919342991455" className="hover:text-gold transition-colors">+91 9342991455</a>
              </div>
            </li>
            <li className="flex items-start gap-2 text-primary-foreground/70">
              <Mail className="w-4 h-4 mt-0.5 text-gold shrink-0" />
              <a href="mailto:spstravelspondicherry@gmail.com" className="hover:text-gold transition-colors break-all">
                spstravelspondicherry@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-2 text-primary-foreground/70">
              <MapPin className="w-4 h-4 mt-0.5 text-gold shrink-0" />
              <span>No: 34, ECR Main Road, Auroville Bus Stop, Periya Mudhaliyar Chavadi - 605104</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="border-t border-primary-foreground/10 py-6 text-center text-xs text-primary-foreground/50">
      © {new Date().getFullYear()} SPS Travels Pondicherry. All rights reserved.
    </div>
  </footer>
);

export default Footer;
