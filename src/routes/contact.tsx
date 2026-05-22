import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Malhan Associates" },
      { name: "description", content: "Reach Malhan Associates at our Rohini chambers or Uttam Nagar office, by phone or email." },
      { property: "og:title", content: "Contact Malhan Associates" },
      { property: "og:description", content: "Reach Malhan Associates at our Rohini chambers or Uttam Nagar office, by phone or email." },
      { property: "og:url", content: "/contact" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          name: "Malhan Associates",
          url: "https://glowup-malhan-hub.lovable.app/contact",
          telephone: ["+91-88606-25086", "+91-96546-57848"],
          email: ["rajnimalhan.advocate@gmail.com", "rammalhanadvocate@gmail.com"],
          openingHours: "Mo-Sa 10:00-19:00",
          address: [
            { "@type": "PostalAddress", streetAddress: "Rohini District Courts, Sector 14", addressLocality: "Rohini, New Delhi", postalCode: "110085", addressCountry: "IN" },
            { "@type": "PostalAddress", streetAddress: "C-20, Gulab Bagh, near Kiran Garden Gurudwara, Om Vihar, Uttam Nagar", addressLocality: "New Delhi", postalCode: "110059", addressCountry: "IN" },
          ],
        }),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="eyebrow mb-4">Contact Us</p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold leading-tight">
            Reach the <span className="text-gold">Chambers</span>.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            For information about our practice areas and to get in touch.
          </p>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-5">
            {[
              { icon: Phone, label: "Phone", value: "+91 88606 25086", href: "tel:+918860625086" },
              { icon: Phone, label: "Phone", value: "+91 96546 57848", href: "tel:+919654657848" },
              { icon: Mail, label: "Email", value: "rajnimalhan.advocate@gmail.com", href: "mailto:rajnimalhan.advocate@gmail.com" },
              { icon: Mail, label: "Email", value: "rammalhanadvocate@gmail.com", href: "mailto:rammalhanadvocate@gmail.com" },
              { icon: MapPin, label: "Chambers", value: "Rohini District Courts, Sector 14, Rohini, New Delhi – 110085" },
              { icon: MapPin, label: "Office", value: "C-20, Gulab Bagh, near Kiran Garden Gurudwara, Om Vihar, Uttam Nagar, New Delhi – 110059" },
              { icon: Clock, label: "Hours", value: "Mon – Sat • 10:00 AM – 7:00 PM" },
            ].map((c) => {
              const Wrap = c.href ? "a" : "div";
              return (
                <Wrap
                  key={c.label}
                  {...(c.href ? { href: c.href } : {})}
                  className="flex items-start gap-4 rounded-2xl border border-border/60 bg-card/50 p-5 hover:border-gold/40 transition-colors"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl gradient-gold">
                    <c.icon className="h-5 w-5 text-gold-foreground" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-semibold">{c.label}</p>
                    <p className="mt-1 font-medium">{c.value}</p>
                  </div>
                </Wrap>
              );
            })}
          </div>

          <div className="lg:col-span-3">
            <form
              onSubmit={onSubmit}
              className="rounded-3xl border border-border/60 bg-card/60 p-8 sm:p-10"
            >
              {submitted ? (
                <div className="text-center py-10">
                  <CheckCircle2 className="h-14 w-14 text-gold mx-auto mb-4" />
                  <h3 className="font-display text-2xl font-bold">Enquiry received.</h3>
                  <p className="mt-2 text-muted-foreground">
                    Your enquiry has been noted. The chambers will revert as appropriate.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="font-display text-2xl font-bold">Send an enquiry</h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    For informational queries only. Please do not share confidential case details here.
                  </p>
                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    <Field label="Full Name" name="name" required />
                    <Field label="Phone" name="phone" type="tel" required />
                    <div className="sm:col-span-2">
                      <Field label="Email" name="email" type="email" required />
                    </div>
                    <div className="sm:col-span-2">
                      <Field label="Matter Type" name="matter" placeholder="e.g. Civil, Criminal, Family, Property" />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-2">
                        Brief Description
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={5}
                        required
                        className="w-full rounded-xl border border-input bg-background/50 px-4 py-3 text-sm focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all"
                        placeholder="Briefly describe your matter…"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="mt-7 w-full inline-flex items-center justify-center gap-2 rounded-full gradient-gold px-7 py-3.5 text-sm font-semibold text-gold-foreground shadow-elegant hover:opacity-95 transition-all"
                  >
                    Send Message <Send className="h-4 w-4" />
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="eyebrow mb-3">Find Us</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold">
              Visit Our <span className="text-gold">Locations</span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            <div>
              <h3 className="font-display text-lg font-semibold mb-3">Chambers — Rohini District Courts</h3>
              <div className="rounded-3xl overflow-hidden border border-border/60 shadow-elegant">
                <iframe
                  title="Malhan Associates chambers — Rohini District Courts"
                  src="https://www.google.com/maps?q=Rohini+District+Courts+Sector+14+Delhi&output=embed"
                  width="100%"
                  height="380"
                  style={{ border: 0, display: "block" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold mb-3">Office — Uttam Nagar</h3>
              <div className="rounded-3xl overflow-hidden border border-border/60 shadow-elegant">
                <iframe
                  title="Malhan Associates office — Uttam Nagar"
                  src="https://www.google.com/maps?q=C-20+Gulab+Bagh+Kiran+Garden+Gurudwara+Om+Vihar+Uttam+Nagar+New+Delhi+110059&output=embed"
                  width="100%"
                  height="380"
                  style={{ border: 0, display: "block" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label, name, type = "text", required, placeholder,
}: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  const id = `contact-${name}`;
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-2">
        {label}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-input bg-background/50 px-4 py-3 text-sm focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all"
      />
    </div>
  );
}
