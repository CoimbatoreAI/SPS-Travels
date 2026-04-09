import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { WhatsAppIcon } from "@/components/Icons";
import SectionHeading from "@/components/SectionHeading";
import { useScrollReveal } from "@/components/useScrollReveal";
import heroChennai from "@/assets/hero-chennai-pondy.jpg";

function RevealSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, visible } = useScrollReveal();
  return (
    <div ref={ref} className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}>
      {children}
    </div>
  );
}

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(`Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nMessage: ${form.message}`);
    window.open(`https://wa.me/919677792455?text=${text}`, "_blank");
    setSubmitted(true);
  };

  return (
    <main>
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img src={heroChennai} alt="Contact SPS Travels Pondicherry" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, hsla(218,78%,10%,0.7) 0%, hsla(216,71%,15%,0.85) 100%)" }} />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-4">Contact Us</h1>
          <p className="text-primary-foreground/70 text-lg">Get in touch for bookings and enquiries</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <RevealSection>
              <SectionHeading subtitle="Get In Touch" title="Contact Details" />
              <div className="space-y-4">
                <a href="tel:+919677792455" className="flex items-start gap-4 glass-card rounded-xl p-4 hover-gold-glow transition-all">
                  <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground text-sm">Primary Contact</h3>
                    <p className="text-muted-foreground text-sm">+91 9677792455</p>
                  </div>
                </a>

                <a href="tel:+919342991455" className="flex items-start gap-4 glass-card rounded-xl p-4 hover-gold-glow transition-all">
                  <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground text-sm">Booking Hotline</h3>
                    <p className="text-muted-foreground text-sm">+91 93429 91455</p>
                  </div>
                </a>

                <a href="mailto:spstravelspondicherry@gmail.com" className="flex items-start gap-4 glass-card rounded-xl p-4 hover-gold-glow transition-all">
                  <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground text-sm">Email</h3>
                    <p className="text-muted-foreground text-xs break-all">spstravelspondicherry@gmail.com</p>
                  </div>
                </a>
              </div>

              <div className="flex flex-col gap-3">
                <a href="tel:+919342991455" className="gold-gradient text-primary font-bold py-3 rounded-lg hover-gold-glow hover-shine text-center inline-flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" /> Call to Book
                </a>
                <a href="https://wa.me/919342991455?text=Hi%20SPS%20Travels%2C%20I'm%20interested%20in%20your%20services" target="_blank" rel="noopener noreferrer" className="border-2 border-gold text-gold font-bold py-3 rounded-lg hover:bg-gold hover:text-primary transition-all text-center inline-flex items-center justify-center gap-2">
                  <WhatsAppIcon className="w-5 h-5" /> WhatsApp Booking
                </a>
              </div>
            </RevealSection>

            <RevealSection>
              <SectionHeading subtitle="Send Message" title="Quick Enquiry" />
              {submitted ? (
                <div className="glass-card rounded-xl p-10 text-center">
                  <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center mx-auto mb-4">
                    <Send className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-foreground">Message Sent!</h3>
                  <p className="text-muted-foreground mt-2">We'll get back to you shortly via WhatsApp.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="glass-card rounded-xl p-6 space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-1">Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-1">Phone</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-1">Email</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition"
                      placeholder="Your email (optional)"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-1">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition resize-none"
                      placeholder="Your message or booking details"
                    />
                  </div>
                  <button type="submit" className="w-full gold-gradient text-primary font-heading font-bold py-3 rounded-lg hover-gold-glow hover-shine transition-all flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" /> Send via WhatsApp
                  </button>
                </form>
              )}
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-[400px]">
        <iframe
          title="SPS Travels Pondicherry Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.0!2d79.81!3d12.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDAwJzAwLjAiTiA3OcKwNDgnMzYuMCJF!5e0!3m2!1sen!2sin!4v1700000000000"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </section>
    </main>
  );
};

export default Contact;
