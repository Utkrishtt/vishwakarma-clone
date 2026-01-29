import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/40 backdrop-blur-sm border-b border-border">
      <div className="container h-20 grid grid-cols-3 items-center md:flex md:justify-between">
        
        {/* Logo (Left) */}
        <Link href="/">
          <a className="flex items-center gap-2 justify-start">
            <img
              src="/logo.png"
              alt="Vishwakarma Interior & Decorators Logo"
              className="h-10 w-auto object-contain"
              style={{ maxWidth: 48 }}
            />
            <div className="hidden sm:block">
              <div className="text-sm font-semibold text-foreground">
                Vishwakarma
              </div>
              <div className="text-xs text-secondary">
                Interior & Decorators
              </div>
            </div>
          </a>
        </Link>

        {/* Center Brand Name (Mobile Only) */}
        <div className="sm:hidden text-center px-2">
          <span className="
            block
            text-[10px] xs:text-xs
            font-bold tracking-widest
            text-accent uppercase
            break-words
            leading-tight
          ">
            VISHWAKARMA INTERIOR & DECORATORS
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a className="text-sm font-medium text-foreground hover:text-accent transition-colors duration-300">
                {link.label}
              </a>
            </Link>
          ))}
          <a href="/vishwakarma-interiorDecorators.pdf">
            <button className="px-6 py-2 border border-accent text-accent hover:bg-accent hover:text-background transition-all duration-300 text-sm font-medium">
              Brochure
            </button>
          </a>
        </div>

        {/* Mobile Menu Button (Right) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 justify-self-end hover:text-accent transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background/40">
          <div className="container py-4 space-y-3">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className="block py-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </Link>
            ))}
            <a href="/vishwakarma-interiorDecorators.pdf">
              <button className="w-full mt-4 px-6 py-2 border border-accent text-accent hover:bg-accent hover:text-background transition-all duration-300 text-sm font-medium">
                Brochure
              </button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
