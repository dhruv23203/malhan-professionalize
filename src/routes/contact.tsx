import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Malhan Associates" },
      { name: "description", content: "Book a confidential consultation with our experienced advocates." },
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
            Let's discuss your <span className="text-gold">matter</span>.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Confidential. Considered. Always within 24 hours of your message.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-5">
            {[
              { icon: Phone, label: "Phone", value: "+91 88606 25086", href: "tel:+918860625086" },
              { icon: Mail, label: "Email", value: "contact@malhanassociates.in", href: "mailto:contact@malhanassociates.in" },
              { icon: MapPin, label: "Chambers", value: "District Court Complex, India" },
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
                  <h3 className="font-display text-2xl font-bold">Message received.</h3>
                  <p className="mt-2 text-muted-foreground">
                    An advocate from our chamber will respond within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="font-display text-2xl font-bold">Request a consultation</h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    All fields kept strictly confidential.
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
                      <label className="block text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-2">
                        Brief Description
                      </label>
                      <textarea
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
    </>
  );
}

function Field({
  label, name, type = "text", required, placeholder,
}: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-input bg-background/50 px-4 py-3 text-sm focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all"
      />
    </div>
  );
}
