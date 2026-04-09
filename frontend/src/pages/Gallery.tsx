import { useState, useEffect } from "react";
import SectionHeading from "@/components/SectionHeading";
import { useScrollReveal } from "@/components/useScrollReveal";
import heroTempo from "@/assets/hero-tempo.jpg";
import vehicleInnova from "@/assets/vehicle-innova.jpg";
import vehicleTempo from "@/assets/vehicle-tempo.jpg";
import vehicleSedan from "@/assets/vehicle-sedan.jpg";
import vehicleSuv from "@/assets/vehicle-suv.jpg";
import tourOoty from "@/assets/tour-ooty.jpg";
import tourKodaikanal from "@/assets/tour-kodaikanal.jpg";
import tourRameswaram from "@/assets/tour-rameswaram.jpg";
import tourMadurai from "@/assets/tour-madurai.jpg";
import tourTirupati from "@/assets/tour-tirupati.jpg";
import heroPondy from "@/assets/hero-pondy-chennai.jpg";
import heroChennai from "@/assets/hero-chennai-pondy.jpg";

const categories = ["All", "Vehicles", "Tours", "Trips"];

const images = [
  { src: vehicleInnova, alt: "Toyota Innova Crysta Pondicherry", cat: "Vehicles" },
  { src: vehicleTempo, alt: "Tempo Traveller luxury interior", cat: "Vehicles" },
  { src: vehicleSedan, alt: "Sedan car rental Pondicherry", cat: "Vehicles" },
  { src: vehicleSuv, alt: "SUV rental Tamil Nadu", cat: "Vehicles" },
  { src: tourOoty, alt: "Ooty tea gardens tour", cat: "Tours" },
  { src: tourKodaikanal, alt: "Kodaikanal lake trip", cat: "Tours" },
  { src: tourRameswaram, alt: "Rameswaram temple visit", cat: "Tours" },
  { src: tourMadurai, alt: "Madurai Meenakshi temple tour", cat: "Tours" },
  { src: tourTirupati, alt: "Tirupati temple darshan", cat: "Tours" },
  { src: heroPondy, alt: "Pondicherry ECR highway drive", cat: "Trips" },
  { src: heroChennai, alt: "Chennai coastal road trip", cat: "Trips" },
  { src: heroTempo, alt: "Group travel tempo traveller", cat: "Trips" },
];

function RevealSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, visible } = useScrollReveal();
  return (
    <div ref={ref} className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}>
      {children}
    </div>
  );
}

const Gallery = () => {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [dbImages, setDbImages] = useState<any[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/gallery`);
        const data = await response.json();
        const formatted = data.map((img: any) => ({
          src: `${import.meta.env.VITE_API_URL}${img.src}`,
          alt: img.alt,
          cat: img.cat
        }));
        setDbImages(formatted);
      } catch (error) {
        console.error("Error fetching gallery images:", error);
      }
    };
    fetchImages();
  }, []);

  const allImages = [...dbImages, ...images];
  const filtered = active === "All" ? allImages : allImages.filter((i) => i.cat === active);

  return (
    <main>
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img src={heroTempo} alt="SPS Travels Gallery" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, hsla(218,78%,10%,0.7) 0%, hsla(216,71%,15%,0.85) 100%)" }} />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-4">Gallery</h1>
          <p className="text-primary-foreground/70 text-lg">Our vehicles, trips, and happy moments</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <RevealSection>
            <SectionHeading subtitle="Photo Gallery" title="Explore Our Collection" />
          </RevealSection>

          <div className="flex justify-center gap-3 mb-10 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full font-heading font-semibold text-sm transition-all ${active === cat ? "gold-gradient text-primary" : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((img, i) => (
              <RevealSection key={`${img.alt}-${i}`}>
                <div
                  className="rounded-xl overflow-hidden cursor-pointer group break-inside-avoid"
                  onClick={() => setLightbox(img.src)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-navy-deep/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <img src={lightbox} alt="Gallery fullscreen" className="max-w-full max-h-[90vh] rounded-xl object-contain" />
        </div>
      )}
    </main>
  );
};

export default Gallery;
