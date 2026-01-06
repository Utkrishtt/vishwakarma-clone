/**
 * Footer Component
 * Design: Luxury minimalist footer with contact information
 * - Company details and contact information
 * - Social links and quick navigation
 * - Gold accent dividers
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      {/* Main Footer Content */}
      <div className="container py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="text-2xl font-bold text-accent">V</div>
              <div>
                <div className="text-sm font-semibold text-foreground">
                  Vishwakarma
                </div>
                <div className="text-xs text-secondary">Interior & Decorators</div>
              </div>
            </div>
            <p className="text-secondary text-sm leading-relaxed">
              Architect & Interiors Design Consultant. Creating luxury spaces
              since 2000s.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 tracking-widest">
              CONTACT
            </h3>
            <div className="space-y-3 text-sm text-secondary">
              <div>
                <p className="font-medium text-foreground mb-1">Email</p>
                <a
                  href="mailto:vishwakarma.interiors.7@gmail.com"
                  className="hover:text-accent transition-colors"
                >
                  vishwakarma.interiors.7@gmail.com
          
                </a>
                <br />
                <a
                  href="mailto:raj9871569819@gmail.com"
                  className="hover:text-accent transition-colors"
                >
                  raj9871569819@gmail.com
          
                </a>
              </div>
              <div>
                <p className="font-medium text-foreground mb-1">Phone</p>
                <div className="space-y-1">
                  <a
                    href="tel:+919999772839"
                    className="block hover:text-accent transition-colors"
                  >
                    +91 9999772839
                  </a>
                  <a
                    href="tel:+919871569819"
                    className="block hover:text-accent transition-colors"
                  >
                    +91 9871569819
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 tracking-widest">
              LOCATIONS
            </h3>
            <div className="space-y-4 text-sm text-secondary">
              <div>
                <p className="font-medium text-foreground mb-1">Office</p>
                <p>K-665, Nawada Industrial Area</p>
                <p>Uttam Nagar, New Delhi-110059</p>
              </div>
              <div>
                <p className="font-medium text-foreground mb-1">Branch</p>
                <p>I-406, Beta-II, Greater Noida</p>
                <p>Gautam Budh Nagar, U.P.-201308</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-secondary">
          <p>&copy; {currentYear} Vishwakarma Interior & Decorators. All rights reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
