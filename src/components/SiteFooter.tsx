import { Link } from "@tanstack/react-router";
import { Scale, Phone, Mail, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-card/40 mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full gradient-gold">
                <Scale className="h-5 w-5 text-gold-foreground" strokeWidth={2.2} />
              </div>
              <div>
                <div className="font-display text-xl font-bold">MALHAN</div>
                <div className="text-[10px] tracking-[0.3em] text-gold font-semibold">
                  ASSOCIATES
                </div>
              </div>
            </Link>
            <p className="mt-5 max-w-md text-sm text-muted-foreground leading-relaxed">
              Trusted legal counsel since 1998. Representing clients in civil, criminal,
              matrimonial, family, property and commercial matters with diligence and integrity.
            </p>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold text-gold mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-gold transition-colors">About</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-gold transition-colors">Services</Link></li>
              <li><Link to="/legal-advice" className="text-muted-foreground hover:text-gold transition-colors">Legal Advice</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold text-gold mb-4">Reach Us</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <Phone className="h-4 w-4 mt-0.5 text-gold shrink-0" />
                <a href="tel:+918860625086" className="hover:text-foreground">+91 88606 25086</a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="h-4 w-4 mt-0.5 text-gold shrink-0" />
                <a href="mailto:contact@malhanassociates.in" className="hover:text-foreground">contact@malhanassociates.in</a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0" />
                <span>Rohini District Courts, Sector 14, New Delhi – 110085</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Malhan Associates. All rights reserved.</p>
          <p className="italic">Bar Council compliant • Confidential consultation</p>
        </div>
      </div>
    </footer>
  );
}
