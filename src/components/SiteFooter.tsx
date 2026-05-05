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
              An association of advocates practising before District Courts, High Courts and
              Tribunals. This website is for informational purposes only.
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
                <div className="flex flex-col">
                  <a href="tel:+918860625086" className="hover:text-foreground">+91 88606 25086</a>
                  <a href="tel:+919654657848" className="hover:text-foreground">+91 96546 57848</a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="h-4 w-4 mt-0.5 text-gold shrink-0" />
                <div className="flex flex-col break-all">
                  <a href="mailto:rajnimalhan.advocate@gmail.com" className="hover:text-foreground">rajnimalhan.advocate@gmail.com</a>
                  <a href="mailto:rammalhanadvocate@gmail.com" className="hover:text-foreground">rammalhanadvocate@gmail.com</a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0" />
                <span>Chambers: Rohini District Courts, Sector 14, New Delhi – 110085</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0" />
                <span>Office: C-20, Gulab Bagh, Om Vihar, Uttam Nagar, New Delhi – 110059</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/60 space-y-3 text-xs text-muted-foreground">
          <p className="italic leading-relaxed">
            Disclaimer: Under the rules of the Bar Council of India, an advocate is prohibited
            from soliciting work or advertising through communication in public domain. This
            website is meant solely for the purposes of providing information and not for the
            purpose of advertising.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            <p>© {new Date().getFullYear()} Malhan Associates. All rights reserved.</p>
            <p>Bar Council of India compliant</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
