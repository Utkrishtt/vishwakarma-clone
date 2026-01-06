import Hero from "@/components/Hero";
import Contact from "@/components/Contact";

/**
 * Contact Page
 * Design: Hero section followed by contact form
 */
export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Hero
        title="Get In Touch"
        subtitle="Let's create something beautiful together"
        backgroundImage="/images/hero-main.jpg"
      />
      <Contact />
    </div>
  );
}
