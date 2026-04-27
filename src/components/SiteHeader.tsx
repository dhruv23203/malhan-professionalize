import { Link } from "@tanstack/react-router";
import { Phone, Menu, X, Scale } from "lucide-react";
import { useState } from "react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/legal-advice", label: "Legal Advice" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-md border-b border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex h-11 w-11 items-center justify-center rounded-full gradient-gold shadow-elegant">
              <Scale className="h-5 w-5 text-gold-foreground" strokeWidth={2.2} />
            </div>
            <div className="leading-tight">
              <div className="font-display text-xl font-bold tracking-wide text-foreground">
                MALHAN
              </div>
              <div className="text-[10px] tracking-[0.3em] text-gold font-semibold">
                ASSOCIATES
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="relative px-4 py-2 text-sm font-medium text-foreground/90 hover:text-gold transition-colors"
                activeProps={{
                  className: "relative px-4 py-2 text-sm font-medium text-gold",
                }}
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-6 bg-gold rounded-full" />
                    )}
                  </>
                )}
              </Link>
            ))}
          </nav>

          <a
            href="tel:+918860625086"
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-5 py-2.5 text-sm font-semibold text-gold hover:bg-gold hover:text-gold-foreground transition-all"
          >
            <Phone className="h-4 w-4" />
            +91 88606 25086
          </a>

          <button
            className="lg:hidden text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden pb-6 pt-2 animate-fade-up">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-md text-foreground hover:bg-accent hover:text-gold transition-colors"
                  activeProps={{ className: "px-4 py-3 rounded-md bg-accent text-gold" }}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="tel:+918860625086"
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-gold-foreground"
              >
                <Phone className="h-4 w-4" /> +91 88606 25086
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
