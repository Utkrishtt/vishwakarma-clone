import Hero from "@/components/Hero";
import About from "@/components/About";

/**
 * About Page
 * Design: Hero section followed by detailed about content
 */
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Hero
        title="For Unlimited Creativity"
        subtitle="A premier luxury design-build firm with a highly skilled design and build team"
        backgroundImage="/images/hero-about.jpg"
      />
      <About />
    </div>
  );
}
