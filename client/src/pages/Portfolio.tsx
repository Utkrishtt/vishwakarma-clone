import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";

/**
 * Portfolio Page
 * Design: Hero section followed by portfolio gallery
 */
export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      <Hero
        title="Practical, Elegant, Modern"
        subtitle="Exclusive residences, showcasing elegance and luxury"
        backgroundImage="/images/hero-portfolio.jpg"
      />
      <Portfolio />
    </div>
  );
}
