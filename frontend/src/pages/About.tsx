import { Shield, Users, Clock, Heart, MapPin, Award } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { useScrollReveal } from "@/components/useScrollReveal";
import heroPondy from "@/assets/hero-pondy-chennai.jpg";

function RevealSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, visible } = useScrollReveal();
  return (
    <div ref={ref} className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}>
      {children}
    </div>
  );
}

const values = [
  { icon: Shield, title: "Safety First", desc: "Every vehicle undergoes regular maintenance checks. All drivers are verified and experienced." },
  { icon: Heart, title: "Customer First", desc: "Your comfort and satisfaction is our top priority. We go above and beyond to ensure a great experience." },
  { icon: Clock, title: "Punctual Service", desc: "We value your time. Our drivers are always on time for every pickup, guaranteed." },
  { icon: Users, title: "Expert Team", desc: "Our team has deep knowledge of Tamil Nadu routes, attractions, and hidden gems." },
  { icon: MapPin, title: "Wide Coverage", desc: "From Pondicherry to any destination in Tamil Nadu and beyond — we've got you covered." },
  { icon: Award, title: "10+ Years Experience", desc: "Over a decade of trusted travel service, serving thousands of happy customers." },
];

const About = () => (
  <main>
    {/* Hero */}
    <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      <img src={heroPondy} alt="About SPS Travels Pondicherry" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, hsla(218,78%,10%,0.7) 0%, hsla(216,71%,15%,0.85) 100%)" }} />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-4">About Us</h1>
        <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">Your trusted travel partner in Pondicherry since over a decade</p>
      </div>
    </section>

    {/* Story */}
    <section className="section-padding bg-background">
      <div className="container-wide">
        <RevealSection>
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeading subtitle="Our Story" title="SPS Travels Pondicherry" />
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded with a vision to provide premium, reliable transportation services in Pondicherry, SPS Travels has grown to become one of the most trusted cab and tour service providers in the region. With over 10 years of experience, we have served thousands of happy customers across Tamil Nadu.
              </p>
              <p>
                Our fleet includes Toyota Innova Crysta, Tempo Travellers, Sedans, and SUVs — all meticulously maintained and sanitized for your safety and comfort. Whether you need a quick taxi from Pondicherry to Chennai or a multi-day tour package to Ooty, Kodaikanal, or Rameswaram, we have you covered.
              </p>
              <p>
                At SPS Travels, we believe travel should be an experience, not just a journey. That's why we invest in the best vehicles, hire experienced drivers, and offer competitive pricing with no hidden charges.
              </p>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>

    {/* Values */}
    <section className="section-padding bg-navy-deep">
      <div className="container-wide">
        <RevealSection>
          <SectionHeading subtitle="Our Values" title="What Drives Us" light />
        </RevealSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v) => (
            <RevealSection key={v.title}>
              <div className="glass-dark rounded-xl p-6 hover-gold-glow transition-all">
                <v.icon className="w-10 h-10 text-gold mb-4" />
                <h3 className="font-heading font-bold text-lg text-primary-foreground">{v.title}</h3>
                <p className="text-primary-foreground/60 text-sm mt-2">{v.desc}</p>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default About;
