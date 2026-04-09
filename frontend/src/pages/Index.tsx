import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Phone, Shield, Clock, DollarSign, Users, Car, MapPin, Star, CheckCircle, ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/Icons";
import SectionHeading from "@/components/SectionHeading";
import { useScrollReveal } from "@/components/useScrollReveal";
import BookingForm from "@/components/BookingForm";

import heroPondy from "@/assets/hero-pondy-chennai.jpg";
import heroChennai from "@/assets/hero-chennai-pondy.jpg";
import heroTempo from "@/assets/hero-tempo.jpg";
import vehicleInnova from "@/assets/vehicle-innova.jpg";
import vehicleTempo from "@/assets/vehicle-tempo.jpg";
import vehicleSedan from "@/assets/vehicle-sedan.jpg";
import vehicleSuv from "@/assets/vehicle-suv.jpg";
import tempo12 from "@/assets/tempo-12.png";
import sightseeingHero from "@/assets/sightseeing-hero.png";

import tourOoty from "@/assets/tour-ooty.jpg";
import tourKodaikanal from "@/assets/tour-kodaikanal.jpg";
import tourRameswaram from "@/assets/tour-rameswaram.jpg";
import tourMadurai from "@/assets/tour-madurai.jpg";
import tourTirupati from "@/assets/tour-tirupati.jpg";

const slides = [
  { img: heroPondy, title: "Fast & Comfortable Pondy to Chennai Taxi", sub: "Safe | Affordable | On-Time Pickup", cta: "Book Now", href: "tel:+919677792455" },
  { img: heroChennai, title: "Reliable Chennai to Pondy Cab Service", sub: "Luxury sedans & SUVs available 24/7", cta: "Call Now", href: "tel:+919677792455" },
  { img: heroTempo, title: "Luxury Group Travel Made Easy", sub: "12 / 14 / 18 Seater Tempo Travellers", cta: "Get Quote", href: "https://wa.me/919342991455?text=I%20need%20a%20quote%20for%20tempo%20traveller" },
];

const vehicles = [
  { img: vehicleSedan, name: "Sedan (4 Seater)", desc: "₹14/km One Way | ₹13/km Round Trip", features: ["AC", "3 Bags", "Driver Beta: ₹400"] },
  { img: vehicleSuv, name: "SUV (6-7 Seater)", desc: "₹19/km One Way | ₹18/km Round Trip", features: ["AC", "4 Bags", "Driver Beta: ₹400"] },
  { img: vehicleInnova, name: "Toyota Innova Crysta", desc: "₹23/km One Way | ₹22/km Round Trip", features: ["AC", "5 Bags", "Driver Beta: ₹400"] },
  { img: tempo12, name: "Tempo Traveller", desc: "Starting from ₹23/km (Round Trip)", features: ["12 / 14 / 18 Seater", "AC", "Luxury Urbania"] },
];

const popularRoutesTeaser = [
  { route: "Chennai → Pondicherry", dist: "166 KM", price: "₹14/km" },
  { route: "Chennai → Madurai", dist: "456 KM", price: "₹19/km" },
  { route: "Chennai → Bangalore", dist: "347 KM", price: "₹14/km" },
  { route: "Pondy → Bangalore", dist: "317 KM", price: "₹14/km" },
  { route: "Chennai → Rameshwaram", dist: "560 KM", price: "₹23/km" },
];

const services = [
  { icon: Car, title: "Pondicherry to Chennai Taxi", desc: "Fast, comfortable ECR route service" },
  { icon: Car, title: "Chennai to Pondicherry Taxi", desc: "Reliable pickup from airport & city" },
  { icon: Users, title: "Tempo Traveller Rental", desc: "Luxury 12/14/17 Seaters for groups" },
  { icon: MapPin, title: "Outstation Trips", desc: "Tamil Nadu-wide reliable cab service" },
];

const tours = [
  { img: tourOoty, dest: "Ooty", duration: "3 Days / 2 Nights", highlights: ["Tea Gardens", "Botanical Garden", "Nilgiri Mountain Railway"], alt: "Ooty hill station tea gardens tour from Pondicherry" },
  { img: tourKodaikanal, dest: "Kodaikanal", duration: "3 Days / 2 Nights", highlights: ["Kodai Lake", "Pillar Rocks", "Coaker's Walk"], alt: "Kodaikanal lake scenic tour package" },
  { img: tourRameswaram, dest: "Rameswaram", duration: "2 Days / 1 Night", highlights: ["Ramanathaswamy Temple", "Pamban Bridge", "Dhanushkodi"], alt: "Rameswaram temple pilgrimage tour" },
  { img: sightseeingHero, dest: "Pondicherry Local", duration: "Full Day (8 Hours)", highlights: ["Auroville", "Promenade Beach", "Paradise Beach"], alt: "Pondicherry local sightseeing tour" },
];

const testimonials = [
  { name: "Rajesh K.", text: "Excellent service from Pondy to Chennai. Clean car, professional driver. Highly recommended!", rating: 5 },
  { name: "Priya M.", text: "Booked tempo traveller for our family trip to Ooty. Amazing experience, very comfortable seats!", rating: 5 },
  { name: "Arun S.", text: "Best taxi service in Pondicherry. Always on time and very affordable pricing. 5 stars!", rating: 5 },
];

const whyUs = [
  { icon: Shield, title: "Safe & Reliable", desc: "Well-trained, verified professional drivers" },
  { icon: CheckCircle, title: "Transparent Pricing", desc: "Competitive per-km rates with no hidden costs" },
  { icon: Clock, title: "24/7 Availability", desc: "Round the clock service for all your needs" },
  { icon: DollarSign, title: "Best Tariff", desc: "One-way and Round-trip packages available" },
];

const stats = [
  { value: "10000+", label: "Happy Customers" },
  { value: "50000+", label: "Trips Completed" },
  { value: "15+", label: "Years Experience" },
  { value: "50+", label: "Vehicles" },
];

function HeroSlider() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}
        >
          <img
            src={s.img}
            alt={s.title}
            className="absolute inset-0 w-full h-full object-cover"
            {...(i === 0 ? {} : { loading: "lazy" as const })}
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, hsla(218,78%,10%,0.6) 0%, hsla(216,71%,15%,0.8) 100%)" }} />
        </div>
      ))}

      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-primary-foreground mb-4 leading-tight">
            {slides[current].title}
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8">{slides[current].sub}</p>
          <a
            href={slides[current].href}
            target={slides[current].href.startsWith("http") ? "_blank" : undefined}
            rel={slides[current].href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="inline-block gold-gradient text-primary font-heading font-bold px-8 py-4 rounded-lg text-lg hover-gold-glow hover-shine transition-all"
          >
            {slides[current].cta}
          </a>
        </div>
      </div>

      <button onClick={() => setCurrent((c) => (c - 1 + slides.length) % slides.length)} className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full glass-dark flex items-center justify-center text-primary-foreground hover:text-gold transition-colors" aria-label="Previous slide">
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button onClick={() => setCurrent((c) => (c + 1) % slides.length)} className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full glass-dark flex items-center justify-center text-primary-foreground hover:text-gold transition-colors" aria-label="Next slide">
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${i === current ? "bg-gold w-8" : "bg-primary-foreground/40"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

function RevealSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, visible } = useScrollReveal();
  return (
    <div ref={ref} className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}>
      {children}
    </div>
  );
}

function AnimatedCounter({ value, label }: { value: string; label: string }) {
  const { ref, visible } = useScrollReveal();
  return (
    <div ref={ref} className="text-center">
      <div className={`text-4xl md:text-5xl font-heading font-bold gold-text transition-all duration-700 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}>
        {value}
      </div>
      <div className="text-primary-foreground/70 mt-2 text-sm">{label}</div>
    </div>
  );
}

const Index = () => {
  useEffect(() => {
    document.title = "SPS Travels | Best Taxi Service in Pondicherry & Chennai | Tempo Traveller Rental";
  }, []);

  return (
    <main>
      <HeroSlider />

      {/* Booking Form Section */}
      <section className="relative -mt-24 z-20 px-4 mb-20">
        <div className="container-wide">
          <RevealSection>
            <BookingForm />
          </RevealSection>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy-deep py-12">
        <div className="container-wide px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <AnimatedCounter key={s.label} {...s} />
          ))}
        </div>
      </section>

      {/* Vehicles */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <RevealSection>
            <SectionHeading subtitle="Our Fleet" title="Premium Vehicles" description="Travel in comfort with our well-maintained fleet of premium vehicles" />
          </RevealSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {vehicles.map((v, i) => (
              <RevealSection key={v.name}>
                <div className="group glass-card rounded-xl overflow-hidden hover-gold-glow transition-all duration-300" style={{ animationDelay: `${i * 100}ms` }}>
                  <div className="relative overflow-hidden h-48">
                    <img src={v.img} alt={`${v.name} rental in Pondicherry`} loading="lazy" width={800} height={600} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading font-bold text-lg text-foreground">{v.name}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{v.desc}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {v.features.map((f) => (
                        <span key={f} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">{f}</span>
                      ))}
                    </div>
                    <a href="tel:+919342991455" className="mt-4 block text-center gold-gradient text-primary font-semibold py-2.5 rounded-lg text-sm hover-shine">
                      Book Now
                    </a>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Intercity Routes - Requested Services */}
      <section className="section-padding bg-gray-50/50">
        <div className="container-wide">
          <RevealSection>
            <SectionHeading
              subtitle="Intercity & Outstation"
              title="Premium Chennai & Pondy Routes"
              description="Reliable long-distance taxi services connecting major cities with fixed, transparent pricing."
            />
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              { from: "Chennai", to: "Madurai", dist: "456 KM", time: "8h", price: "₹18/km", class: "Premium Cabs" },
              { from: "Chennai", to: "Trichy", dist: "330 KM", time: "6h", price: "₹14/km", class: "Executive Sedan" },
              { from: "Chennai", to: "Rameshwaram", dist: "560 KM", time: "11h", price: "₹23/km", class: "Urbania / Innova" },
              { from: "Chennai", to: "Kanyakumari", dist: "700 KM", time: "13h", price: "₹19/km", class: "Luxury SUV" },
              { from: "Chennai", to: "Kerala (Cochin)", dist: "680 KM", time: "12h", price: "₹25/km", class: "Tour Special" },
              { from: "Chennai", to: "Bangalore", dist: "347 KM", time: "7h", price: "₹13/km", class: "Fast Shuttle" },
              { from: "Chennai", to: "Palakkad", dist: "540 KM", time: "10h", price: "₹18/km", class: "Highland Drive" },
              { from: "Pondicherry", to: "Bangalore", dist: "317 KM", time: "7h", price: "₹14/km", class: "Spiritual Route" },
              { from: "Pondicherry", to: "Madurai", dist: "327 KM", time: "6h", price: "₹19/km", class: "Heritage Trip" }
            ].map((r, i) => (
              <RevealSection key={i}>
                <div className="bg-white rounded-3xl p-8 hover:shadow-2xl transition-all border border-gray-100 group">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className="text-[10px] font-black tracking-[0.2em] text-gold uppercase block mb-1">{r.from} to</span>
                      <h3 className="text-2xl font-black text-navy-deep">{r.to}</h3>
                    </div>
                    <div className="bg-gray-100 text-gray-400 text-[8px] font-black px-3 py-2 rounded-lg tracking-widest">{r.dist}</div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-300 font-bold">Service Type</span>
                      <span className="text-navy-deep font-black uppercase text-[9px] tracking-widest">{r.class}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-300 font-bold">Estimated Time</span>
                      <span className="text-navy-deep font-black uppercase text-[9px] tracking-widest">{r.time} Arrival</span>
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/919342991455?text=I%20want%20to%20book%20a%20taxi%20from%20${r.from}%20to%20${r.to}`}
                    className="w-full py-4 rounded-2xl border border-navy-deep text-navy-deep font-black text-[9px] tracking-[0.3em] uppercase flex items-center justify-center gap-2 group-hover:bg-navy-deep group-hover:text-white transition-all duration-300"
                  >
                    View Rates <ArrowRight className="w-3 h-3 translate-x-0 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-navy-deep">
        <div className="container-wide">
          <RevealSection>
            <SectionHeading subtitle="Our Services" title="What We Offer" description="Comprehensive taxi and tour services across Tamil Nadu" light />
          </RevealSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <RevealSection key={s.title}>
                <div className="glass-dark rounded-xl p-6 hover-gold-glow transition-all group" style={{ animationDelay: `${i * 100}ms` }}>
                  <s.icon className="w-10 h-10 text-gold mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-heading font-bold text-lg text-primary-foreground">{s.title}</h3>
                  <p className="text-primary-foreground/60 text-sm mt-2">{s.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Packages */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <RevealSection>
            <SectionHeading subtitle="Tour Packages" title="Explore Tamil Nadu" description="Curated tour packages from Pondicherry to the best destinations in South India" />
          </RevealSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tours.map((t, i) => (
              <RevealSection key={t.dest}>
                <div className="group rounded-xl overflow-hidden glass-card hover-gold-glow transition-all" style={{ animationDelay: `${i * 100}ms` }}>
                  <div className="relative overflow-hidden h-52">
                    <img src={t.img} alt={t.alt} loading="lazy" width={800} height={600} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute top-3 right-3 bg-gold text-primary text-xs font-bold px-3 py-1 rounded-full">{t.duration}</div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading font-bold text-lg text-foreground">Pondicherry → {t.dest} Tour</h3>
                    <ul className="mt-2 space-y-1">
                      {tours[i].highlights.map((h) => (
                        <li key={h} className="text-sm text-muted-foreground flex items-center gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-gold shrink-0" /> {h}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={`https://wa.me/919342991455?text=I%20am%20interested%20in%20the%20${t.dest}%20tour%20package`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 block text-center gold-gradient text-primary font-semibold py-2.5 rounded-lg text-sm hover-shine flex items-center justify-center gap-2"
                    >
                      <WhatsAppIcon className="w-5 h-5" /> Enquire Now
                    </a>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-navy-deep">
        <div className="container-wide">
          <RevealSection>
            <SectionHeading subtitle="Why Choose Us" title="The SPS Advantage" light />
          </RevealSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {whyUs.map((w) => (
              <RevealSection key={w.title}>
                <div className="text-center p-6">
                  <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center mx-auto mb-4">
                    <w.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-primary-foreground">{w.title}</h3>
                  <p className="text-primary-foreground/60 text-sm mt-1">{w.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <RevealSection>
            <SectionHeading subtitle="Testimonials" title="What Our Customers Say" />
          </RevealSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <RevealSection key={i}>
                <div className="glass-card rounded-xl p-6">
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground italic">"{t.text}"</p>
                  <p className="font-heading font-semibold text-foreground mt-4">— {t.name}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 px-4 overflow-hidden">
        <img src={heroPondy} alt="Book your ride with SPS Travels" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, hsla(218,78%,10%,0.85) 0%, hsla(216,71%,15%,0.9) 100%)" }} />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Book Your Ride Now</h2>
          <p className="text-primary-foreground/70 mb-8 max-w-2xl mx-auto">Experience premium travel with South India's most trusted cab service. Affordable rates, 24/7 service, and professional drivers.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="tel:+919677792455" className="gold-gradient text-primary font-bold px-8 py-4 rounded-lg text-lg hover-gold-glow hover-shine inline-flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" /> +91 96777 92455
            </a>
            <a href="tel:+919342991455" className="border-2 border-gold text-gold font-bold px-8 py-4 rounded-lg text-lg hover:bg-gold hover:text-primary transition-all inline-flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" /> +91 93429 91455
            </a>
            <a href="https://wa.me/919342991455?text=Hi%2C%20I%20would%20like%20to%20book%20a%20cab" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-[#128C7E] transition-all inline-flex items-center justify-center gap-2">
              <WhatsAppIcon className="w-5 h-5" /> WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
