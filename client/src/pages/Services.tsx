import Hero from "@/components/Hero";
import Services from "@/components/Services";

/**
 * Services Page
 * Design: Hero section followed by detailed services
 */
export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Hero
        title="Playful, Refined & Regal"
        subtitle="To fulfil dreams and complete projects"
        backgroundImage="/images/hero-services.jpg"
      />
      <Services />
    </div>
  );
}
