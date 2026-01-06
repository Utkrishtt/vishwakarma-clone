/**
 * Contact Component
 * Design: Simple contact form with company information
 * - Minimal form design with gold accents
 * - Contact details and map integration
 */

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for your inquiry! We will contact you soon.");
  };

  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="mb-16 sm:mb-24 max-w-2xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-1 w-12 bg-accent" />
            <span className="text-accent text-sm font-semibold tracking-widest">
              GET IN TOUCH
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
            Let’s Design Something Timeless
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-card border border-border text-foreground placeholder-secondary focus:outline-none focus:border-accent transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 bg-card border border-border text-foreground placeholder-secondary focus:outline-none focus:border-accent transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-card border border-border text-foreground placeholder-secondary focus:outline-none focus:border-accent transition-colors"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Project Type
                </label>
                <select className="w-full px-4 py-3 bg-card border border-border text-foreground focus:outline-none focus:border-accent transition-colors">
                  <option value="">Select a project type</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="architectural">Architectural</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-card border border-border text-foreground placeholder-secondary focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-accent text-background hover:bg-accent/90 transition-colors font-medium"
              >
                Send Inquiry
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Contact Information
              </h3>
              <p className="text-secondary leading-relaxed">
                Have a project in mind? We'd love to hear from you. Get in touch
                with us to discuss your interior design needs.
              </p>
            </div>

            <div className="space-y-6 pt-8 border-t border-border">
              <div>
                <h4 className="text-sm font-semibold text-accent mb-2 tracking-widest">
                  EMAIL
                </h4>
                <a
                  href="mailto:vishwakarma.interiors.7@gmail.com"
                  className="text-foreground hover:text-accent transition-colors"
                >
                  vishwakarma.interiors.7@gmail.com
                  
                </a>
                <br />
                <a
                  href="mailto:raj9871569819@gmail.com"
                  className="text-foreground hover:text-accent transition-colors"
                >
                  raj9871569819@gmail.com
                  
                </a>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-accent mb-2 tracking-widest">
                  PHONE
                </h4>
                <div className="space-y-2">
                  <a
                    href="tel:+919999772839"
                    className="block text-foreground hover:text-accent transition-colors"
                  >
                    +91 9999772839
                  </a>
                  <a
                    href="tel:+919871569819"
                    className="block text-foreground hover:text-accent transition-colors"
                  >
                    +91 9871569819
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-accent mb-2 tracking-widest">
                  OFFICE ADDRESS
                </h4>
                <p className="text-foreground">
                  K-665, Nawada Industrial Area
                  <br />
                  Uttam Nagar, New Delhi-110059
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-accent mb-2 tracking-widest">
                  BRANCH OFFICE
                </h4>
                <p className="text-foreground">
                  I-406, Beta-II, Greater Noida
                  <br />
                  Gautam Budh Nagar, U.P.-201308
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
