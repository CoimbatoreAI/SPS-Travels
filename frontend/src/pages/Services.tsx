import { Car, Users, MapPin, CheckCircle, Phone, Clock, DollarSign, Shield } from "lucide-react";
import { WhatsAppIcon } from "@/components/Icons";
import SectionHeading from "@/components/SectionHeading";
import { useScrollReveal } from "@/components/useScrollReveal";
import heroChennai from "@/assets/hero-chennai-pondy.jpg";
import vehicleInnova from "@/assets/vehicle-innova.jpg";
import vehicleSedan from "@/assets/vehicle-sedan.jpg";
import vehicleSuv from "@/assets/vehicle-suv.jpg";
import tourOoty from "@/assets/tour-ooty.jpg";
import tourKodaikanal from "@/assets/tour-kodaikanal.jpg";
import tourRameswaram from "@/assets/tour-rameswaram.jpg";
import tourMadurai from "@/assets/tour-madurai.jpg";
import tourTirupati from "@/assets/tour-tirupati.jpg";
import tempo12 from "@/assets/tempo-12.png";
import tempo14 from "@/assets/tempo-14.png";
import tempo18 from "@/assets/tempo-18.png";
import urbania16 from "@/assets/urbania-16.png";
import sightseeingHero from "@/assets/sightseeing-hero.png";

function RevealSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, visible } = useScrollReveal();
  return (
    <div ref={ref} className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}>
      {children}
    </div>
  );
}

const taxiServices = [
  { title: "Pondicherry to Chennai Taxi", desc: "Fast, comfortable taxi service via ECR highway. Available 24/7 with sedan, SUV, and Innova options.", icon: Car, features: ["AC Vehicles", "Door-to-door", "Airport pickup/drop", "24/7 Available"] },
  { title: "Chennai to Pondicherry Cab", desc: "Reliable cab service from Chennai Airport, Railway Station, or any location to Pondicherry.", icon: Car, features: ["Airport Pickup", "Railway Station", "City Hotels", "Flexible Timing"] },
  { title: "Local Pondicherry Sightseeing", desc: "Explore Auroville, Promenade Beach, French Quarter, Paradise Beach and more.", icon: MapPin, features: ["Half Day", "Full Day", "Custom Routes", "Guided Tours"] },
  { title: "Outstation Trips", desc: "Travel anywhere in Tamil Nadu and beyond with our comfortable outstation cab service.", icon: MapPin, features: ["One Way", "Round Trip", "Multi-day", "All India"] },
];

const rentalVehicles = [
  { img: vehicleSedan, name: "Sedan (4 Seater)", capacity: "4 passengers", features: ["One Way: ₹14/km", "Round Trip: ₹13/km", "Luggage: 3 bags", "Driver Beta: ₹400"] },
  { img: vehicleSuv, name: "SUV (6-7 Seater)", capacity: "5+ passengers", features: ["One Way: ₹19/km", "Round Trip: ₹18/km", "Luggage: 4 bags", "Driver Beta: ₹400"] },
  { img: vehicleInnova, name: "Toyota Innova Crysta", capacity: "6+ passengers", features: ["One Way: ₹23/km", "Round Trip: ₹22/km", "Luggage: 5 bags", "Driver Beta: ₹400"] },
];

const tempoTravellers = [
  {
    img: urbania16,
    name: "Urbania 16-Seater Luxury",
    desc: "The most premium group travel experience. Ideal for executives, VIP guests, or luxury family vacations featuring best-in-class European design and supreme comfort.",
    price: "₹35/km",
    bata: "₹1000",
    features: ["Premium Design", "Executive Seating", "Advanced AC", "Luxury Experience", "Priority Booking"],
    featured: true
  },
  {
    img: tempo12,
    name: "12-Seater Tempo Traveller",
    desc: "Perfect for small groups or families looking to travel together in comfort. Features include push-back seats, air conditioning, and ample leg space.",
    price: "₹23/km",
    bata: "₹800",
    features: ["AC", "Push-back Seats", "Music System", "Large Luggage Space"]
  },
  {
    img: tempo14,
    name: "14-Seater Tempo Traveller",
    desc: "For medium-sized groups, offering a relaxed and convenient journey. Best suited for corporate tours and group functions.",
    price: "₹23/km",
    bata: "₹800",
    features: ["AC", "Push-back Seats", "Music System", "Extra Comfort"]
  },
  {
    img: tempo18,
    name: "18-Seater Tempo Traveller",
    desc: "Travel with bigger groups comfortably. Perfect for group vacations, school/college trips, and weddings.",
    price: "₹27/km",
    bata: "₹800",
    features: ["AC", "Push-back Seats", "Spacious Interior", "Professional Driver"]
  },
];

const sightseeingHighlights = [
  { icon: "🏖️", title: "Promenade Beach", desc: "Enjoy the sea breeze along the historical monuments and colonial architecture Seaside stretch." },
  { icon: "🌕", title: "Auroville & Matrimandir", desc: "Visit the township dedicated to human unity. The golden Matrimandir is a symbol of peace." },
  { icon: "🕉️", title: "Sri Aurobindo Ashram", desc: "Experience tranquility at the spiritual heart of Pondicherry, a serene retreat for meditation." },
  { icon: "🌊", title: "Paradise Beach", desc: "Golden sands and turquoise waters, accessible by boat from Chunnambar for ultimate relaxation." },
  { icon: "🌸", title: "French Colony", desc: "Walk through picturesque lanes with pastel colonial villas, galleries, and chic cafés in White Town." },
  { icon: "🌿", title: "Botanical Garden", desc: "Lush greenery and rare plants from the French era, offering a refreshing escape in the city." },
];

const popularRoutes = [
  { from: "Chennai", to: "Pondicherry", dist: "166 KM", dur: "3-4 Hours", desc: "Perfect coastal ride via ECR. Ideal for Sedans & SUVs. Scenic beaches." },
  { from: "Chennai", to: "Madurai", dist: "456 KM", dur: "7-8 Hours", desc: "Heritage city route. Best for SUVs, Innova & Urbania. Smooth highways." },
  { from: "Chennai", to: "Trichy", dist: "330 KM", dur: "6 Hours", desc: "The gateway to South Tamil Nadu. Comfortable highway drive." },
  { from: "Chennai", to: "Rameshwaram", dist: "560 KM", dur: "10-11 Hours", desc: "Spiritual journey to the island city. Recommended for group tours via Urbania." },
  { from: "Chennai", to: "Kanyakumari", dist: "700 KM", dur: "12-13 Hours", desc: "Southernmost tip of India. Long distance special with premium comfort." },
  { from: "Chennai", to: "Bangalore", dist: "347 KM", dur: "6-7 Hours", desc: "Business & IT corridor. Fast and reliable commute." },
  { from: "Chennai", to: "Palakkad", dist: "540 KM", dur: "9-10 Hours", desc: "Gateway to Kerala. Scenic western ghats views." },
  { from: "Chennai", to: "Kerala (Cochin)", dist: "680 KM", dur: "12 Hours", desc: "The Land of Backwaters. All-inclusive tour packages available." },
  { from: "Pondicherry", to: "Bangalore", dist: "317 KM", dur: "6-7 Hours", desc: "Spiritual detours via Thiruvannamalai make it a divine ride." },
  { from: "Pondicherry", to: "Madurai", dist: "327 KM", dur: "5-6 Hours", desc: "Chettinad route offers heritage food and temple stops." },
  { from: "Pondicherry", to: "Trichy", dist: "200 KM", dur: "4 Hours", desc: "Central hub connection. Ideal for quick trips." },
  { from: "Pondicherry", to: "Rameshwaram", dist: "440 KM", dur: "8 Hours", desc: "Direct coastal connection for temple tours." },
];

const tours = [
  { img: tourOoty, dest: "Ooty", duration: "3D/2N", highlights: ["Tea Gardens", "Botanical Garden", "Nilgiri Railway", "Ooty Lake"] },
  { img: tourKodaikanal, dest: "Kodaikanal", duration: "3D/2N", highlights: ["Kodai Lake", "Pillar Rocks", "Coaker's Walk", "Silver Cascade"] },
  { img: tourRameswaram, dest: "Rameswaram", duration: "2D/1N", highlights: ["Ramanathaswamy Temple", "Pamban Bridge", "Dhanushkodi"] },
  { img: tourMadurai, dest: "Madurai", duration: "2D/1N", highlights: ["Meenakshi Temple", "Thirumalai Nayak Palace", "Gandhi Museum"] },
  { img: tourTirupati, dest: "Tirupati", duration: "2D/1N", highlights: ["Tirumala Temple", "Sri Venkateswara", "Tirumala Hills"] },
  { img: tourOoty, dest: "Munnar & Kerala", duration: "4D/3N", highlights: ["Tea Estates", "Mattupetty Dam", "Eravikulam", "House Boat"] },
];

const Services = () => (
  <main>
    <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      <img src={heroChennai} alt="SPS Travels Services" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, hsla(218,78%,10%,0.7) 0%, hsla(216,71%,15%,0.85) 100%)" }} />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-4">Our Services</h1>
        <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">Premium taxi, rental & group travel services with transparent pricing</p>
      </div>
    </section>

    {/* Taxi Services */}
    <section className="section-padding bg-background">
      <div className="container-wide">
        <RevealSection>
          <SectionHeading subtitle="Taxi Services" title="Reliable Cab Services" description="Book our trusted taxi service for city rides, airport transfers, and intercity travel" />
        </RevealSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {taxiServices.map((s) => (
            <RevealSection key={s.title}>
              <div className="glass-card rounded-xl p-6 hover-gold-glow transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center shrink-0">
                    <s.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-lg text-foreground">{s.title}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{s.desc}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {s.features.map((f) => (
                        <span key={f} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground flex items-center gap-1">
                          <CheckCircle className="w-3 h-3 text-gold" /> {f}
                        </span>
                      ))}
                    </div>
                    <a href="tel:+919342991455" className="mt-4 inline-block gold-gradient text-primary font-semibold px-5 py-2 rounded-lg text-sm hover-shine">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>

    {/* Tempo Traveller Rental */}
    <section className="section-padding bg-navy-deep">
      <div className="container-wide">
        <RevealSection>
          <SectionHeading
            subtitle="Group Travel"
            title="Premium Tempo Traveller Rental"
            light
            description="Looking for the best Tempo Traveller rental for your family, friends, or corporate group? SPS Travels offers fully maintained, sanitized, and comfortable vehicles with experienced drivers."
          />
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {tempoTravellers.map((v, i) => (
            <RevealSection key={v.name}>
              <div className="glass-dark rounded-2xl overflow-hidden hover-gold-glow transition-all flex flex-col h-full">
                <div className="relative h-64 overflow-hidden">
                  <img src={v.img} alt={v.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 gold-gradient text-primary px-4 py-1.5 rounded-full font-bold text-sm shadow-lg">
                    {v.price}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-heading font-bold text-primary-foreground mb-3">{v.name}</h3>
                  <p className="text-primary-foreground/60 text-sm mb-4 flex-grow">{v.desc}</p>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {v.features.map(f => (
                      <div key={f} className="flex items-center gap-2 text-xs text-primary-foreground/40">
                        <CheckCircle className="w-3.5 h-3.5 text-gold" /> {f}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-primary-foreground/10">
                    <div className="text-sm font-semibold text-primary-foreground">Driver Bata: {v.bata}</div>
                    <a href="tel:+919342991455" className="gold-gradient text-primary font-bold px-6 py-2.5 rounded-lg text-sm hover-shine flex items-center gap-2">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>

    {/* Sightseeing Package */}
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="container-wide relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <RevealSection>
              <span className="text-gold font-bold tracking-widest uppercase text-sm block mb-2">Guided Tours</span>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">Pondicherry Local Sightseeing Package</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Discover the charm of Pondicherry, a serene coastal town where French heritage meets Indian culture. Our curated 8-hour full day tour covers iconic landmarks from spiritual centers to colonial streets.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 glass-card p-4 rounded-xl">
                  <Clock className="w-6 h-6 text-gold" />
                  <div>
                    <div className="font-bold text-foreground">Full Day Tour</div>
                    <div className="text-xs text-muted-foreground">8 Hours Duration</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 glass-card p-4 rounded-xl">
                  <DollarSign className="w-6 h-6 text-gold" />
                  <div>
                    <div className="font-bold text-gold">Starting ₹1,999</div>
                    <div className="text-xs text-muted-foreground">Per Person Rate</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="tel:+919342991455" className="gold-gradient text-primary font-bold px-8 py-4 rounded-lg hover-gold-glow flex items-center gap-2">
                  <Phone className="w-5 h-5" /> Call to Book
                </a>
                <a href="https://wa.me/919342991455?text=I%20want%20to%20book%20Pondicherry%20Sightseeing%20Package" className="border-2 border-gold text-gold font-bold px-8 py-4 rounded-lg hover:bg-gold hover:text-primary transition-all flex items-center gap-2">
                  <WhatsAppIcon className="w-5 h-5" /> Online Enquiry
                </a>
              </div>
            </RevealSection>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {sightseeingHighlights.map((h, i) => (
              <RevealSection key={h.title}>
                <div className="glass-card p-5 rounded-xl hover: gold-glow transition-all h-full border border-gold/10">
                  <div className="text-3xl mb-3">{h.icon}</div>
                  <h3 className="font-bold text-foreground mb-2">{h.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{h.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Vehicle Tariff Grid */}
    <section className="section-padding bg-navy-deep">
      <div className="container-wide">
        <RevealSection>
          <SectionHeading subtitle="Vehicle Rental" title="Tariff & Fleet" description="Affordable & Comfortable Rides for one-way or round trips" light />
        </RevealSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rentalVehicles.map((v) => (
            <RevealSection key={v.name}>
              <div className="glass-dark rounded-xl overflow-hidden hover-gold-glow transition-all group">
                <div className="relative overflow-hidden h-48">
                  <img src={v.img} alt={`${v.name} rental`} loading="lazy" width={800} height={600} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-3 right-3 bg-gold text-primary text-xs font-bold px-3 py-1 rounded-full">{v.capacity}</div>
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-bold text-primary-foreground text-lg">{v.name}</h3>
                  <ul className="mt-3 space-y-1.5">
                    {v.features.map((f) => (
                      <li key={f} className="text-sm text-primary-foreground/60 flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-gold shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                  <a href="tel:+919342991455" className="mt-5 block text-center gold-gradient text-primary font-semibold py-2.5 rounded-lg text-sm hover-shine">Book Now</a>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>

    {/* Popular Routes */}
    <section className="section-padding bg-background">
      <div className="container-wide">
        <RevealSection>
          <SectionHeading subtitle="Destinations" title="Popular Routes" description="Explore top travel routes between major destinations" />
        </RevealSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularRoutes.map((r, i) => (
            <RevealSection key={i}>
              <div className="glass-card rounded-xl p-6 hover-gold-glow transition-all h-full flex flex-col">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gold font-bold">{r.from} → {r.to}</span>
                  <span className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground">{r.dist}</span>
                </div>
                <p className="text-sm text-muted-foreground flex-grow">{r.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-gold" /> {r.dur}
                  </span>
                  <a href={`https://wa.me/919342991455?text=I%20want%20to%20book%20a%20taxi%20from%20${r.from}%20to%20${r.to}`} className="text-sm font-bold text-gold hover:underline">Book Now</a>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>

    {/* Tour Packages */}
    <section className="section-padding bg-navy-deep">
      <div className="container-wide">
        <RevealSection>
          <SectionHeading subtitle="Tour Packages" title="Tamil Nadu Tour Packages" description="Affordable, all-inclusive tour packages from Pondicherry" light />
        </RevealSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours.map((t) => (
            <RevealSection key={t.dest}>
              <div className="group rounded-xl overflow-hidden glass-dark hover-gold-glow transition-all">
                <div className="relative overflow-hidden h-52">
                  <img src={t.img} alt={`Pondicherry to ${t.dest} tour package`} loading="lazy" width={800} height={600} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-3 right-3 bg-gold text-primary text-xs font-bold px-3 py-1 rounded-full">{t.duration}</div>
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-bold text-lg text-primary-foreground">Pondicherry → {t.dest}</h3>
                  <ul className="mt-2 space-y-1">
                    {t.highlights.map((h) => (
                      <li key={h} className="text-sm text-primary-foreground/60 flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-gold shrink-0" /> {h}
                      </li>
                    ))}
                  </ul>
                  <a href={`https://wa.me/919342991455?text=I%20want%20to%20enquire%20about%20${t.dest}%20tour`} target="_blank" rel="noopener noreferrer" className="mt-4 block text-center gold-gradient text-primary font-semibold py-2.5 rounded-lg text-sm hover-shine flex items-center justify-center gap-2">
                    <WhatsAppIcon className="w-5 h-5" /> Enquire Now
                  </a>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-navy-deep section-padding">
      <div className="container-wide text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">“Your Comfort and Safety Are Our Top Priority.”</h2>
        <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">With over 15 years of travel experience, we provide reliable, safe, and affordable group services across South India.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <div className="flex flex-col gap-2">
            <a href="tel:+919677792455" className="gold-gradient text-primary font-bold px-8 py-4 rounded-lg hover-gold-glow inline-flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" /> +91 96777 92455
            </a>
            <span className="text-xs text-primary-foreground/40">Primary Contact</span>
          </div>
          <div className="flex flex-col gap-2">
            <a href="tel:+919342991455" className="border-2 border-gold text-gold font-bold px-8 py-4 rounded-lg hover:bg-gold hover:text-primary transition-all inline-flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" /> +91 93429 91455
            </a>
            <span className="text-xs text-primary-foreground/40">Booking HotLine</span>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default Services;
