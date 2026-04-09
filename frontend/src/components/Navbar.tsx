import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-navy-deep/90 backdrop-blur-md py-3 shadow-2xl" : "bg-transparent py-6"
        }`}
    >
      <div className="container-wide flex items-center justify-between px-6">
        {/* Logo - Neat and Classy */}
        <Link to="/" className="flex items-center group">
          <img src="/logo.png" alt="SPS Travels" className="h-12 md:h-16 w-auto transition-transform duration-500 group-hover:scale-105" />
        </Link>

        {/* Desktop Navigation - Centered */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-xs font-bold tracking-[0.25em] uppercase transition-all duration-300 hover:text-gold relative py-2 group ${location.pathname === link.to ? "text-gold" : "text-primary-foreground/90"
                }`}
            >
              {link.label}
              <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full ${location.pathname === link.to ? "w-full" : ""}`}></span>
            </Link>
          ))}
        </div>

        {/* Contact Action */}
        <div className="hidden lg:flex items-center gap-6">
          <a
            href="tel:+919677792455"
            className="flex flex-col items-end group"
          >
            <span className="text-[10px] text-gold font-bold tracking-widest uppercase opacity-60">Book Now</span>
            <span className="text-primary-foreground font-heading font-black text-lg transition-colors group-hover:text-gold">+91 96777 92455</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-primary-foreground p-2 transition-colors hover:text-gold"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu - Minimalist */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-navy-deep flex flex-col items-center justify-center space-y-8 animate-in fade-in duration-500">
          <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-primary-foreground">
            <X className="w-10 h-10" />
          </button>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-2xl font-black uppercase tracking-[0.3em] transition-colors ${location.pathname === link.to ? "text-gold" : "text-primary-foreground"
                }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-10 flex flex-col items-center gap-4">
            <a href="tel:+919677792455" className="gold-gradient text-primary font-black px-10 py-4 rounded-full text-lg shadow-xl shadow-gold/20">
              Call 96777 92455
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
