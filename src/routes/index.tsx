import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarCheck, MessageSquare, CreditCard, ShieldCheck, Scale, Users, Award, BookOpen } from "lucide-react";
import heroImage from "../assets/hero-law.jpg";
import { Counter } from "../components/Counter";
import { AdvocatesSection } from "../components/AdvocatesSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Malhan Associates — Advocates & Legal Counsel" },
      { name: "description", content: "Informational website of Malhan Associates, advocates practising before District Courts, High Courts and Tribunals in India." },
      { property: "og:title", content: "Malhan Associates — Advocates & Legal Counsel" },
      { property: "og:description", content: "Informational website of Malhan Associates, advocates practising before District Courts, High Courts and Tribunals in India." },
      { property: "og:url", content: "/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          name: "Malhan Associates",
          url: "https://glowup-malhan-hub.lovable.app/",
          telephone: ["+91-88606-25086", "+91-96546-57848"],
          email: ["rajnimalhan.advocate@gmail.com", "rammalhanadvocate@gmail.com"],
          address: [
            { "@type": "PostalAddress", streetAddress: "Rohini District Courts, Sector 14", addressLocality: "Rohini, New Delhi", postalCode: "110085", addressCountry: "IN" },
            { "@type": "PostalAddress", streetAddress: "C-20, Gulab Bagh, near Kiran Garden Gurudwara, Om Vihar, Uttam Nagar", addressLocality: "New Delhi", postalCode: "110059", addressCountry: "IN" },
          ],
          areaServed: "IN",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Malhan Associates",
          url: "https://glowup-malhan-hub.lovable.app/",
        }),
      },
    ],
  }),
  component: HomePage,
});

const stats = [
  { value: 25, suffix: "+", label: "Years in Practice" },
  { value: 13, suffix: "", label: "Practice Areas" },
  { value: 3, suffix: "", label: "Tiers of Courts" },
];

const highlights = [
  { icon: CalendarCheck, title: "Appointment by Request", desc: "Reach out to schedule a meeting at the chambers." },
  { icon: MessageSquare, title: "Initial Consultation", desc: "Discuss your matter directly with the advocates." },
  { icon: CreditCard, title: "Transparent Engagement", desc: "Clear communication regarding fees and process." },
];

const pillars = [
  { icon: ShieldCheck, title: "Informed Counsel", desc: "Practical guidance grounded in long courtroom experience." },
  { icon: Users, title: "Experienced Advocates", desc: "Practising across civil, criminal, family and commercial law." },
  { icon: Award, title: "Diligent Representation", desc: "Careful preparation and structured case management." },
  { icon: BookOpen, title: "Across All Forums", desc: "Appearance before courts, tribunals and quasi-judicial authorities." },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative -mt-20 min-h-[100svh] flex items-center overflow-hidden">
        <img
          src={heroImage}
          alt="Brass scales of justice and gavel on a law book"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 gradient-hero" />
        <div className="relative mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="max-w-3xl animate-fade-up">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-gold" />
              <span className="eyebrow">Advocates & Legal Counsel</span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] text-foreground">
              Malhan Associates — <span className="text-gold">Advocates & Legal Counsel</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg text-foreground/85 leading-relaxed">
              Whether you need legal advice, professional drafting of documents, or courtroom
              representation, our experienced advocates are here to guide you with diligence
              before every court and tribunal.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full gradient-gold px-7 py-3.5 text-sm font-semibold text-gold-foreground shadow-elegant hover:opacity-95 transition-all"
              >
                Contact the Chambers <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/30 bg-background/30 backdrop-blur px-7 py-3.5 text-sm font-semibold text-foreground hover:border-gold hover:text-gold transition-all"
              >
                About Malhan Associates
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights bar */}
      <section className="border-y border-border/60 bg-card/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid gap-8 md:grid-cols-3">
            {highlights.map((h) => (
              <div key={h.title} className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full gradient-gold">
                  <h.icon className="h-5 w-5 text-gold-foreground" />
                </div>
                <div>
                  <p className="font-display text-lg font-semibold">{h.title}</p>
                  <p className="text-sm text-muted-foreground mt-1">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-5xl sm:text-6xl font-bold text-gold tabular-nums">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-3 text-xs uppercase tracking-[0.18em] text-muted-foreground font-semibold">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="py-20 border-t border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="eyebrow mb-4">About Us</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight">
              A Tradition of <span className="text-gold">Trusted Legal Counsel</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Malhan Associates is an association of advocates highly experienced and skilled in
              their respective fields. With more than two and a half decades of practice, we
              represent clients in civil, criminal, matrimonial and family disputes, property
              matters, MACT cases, cheque-bouncing matters and a wide range of allied litigation.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We also bring extensive expertise in commercial documentation, contract drafting,
              legal scrutiny and environmental law — providing timely, structured and result-driven
              legal assistance.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:gap-3 transition-all"
            >
              Read our story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-2xl border border-border/60 bg-card/50 p-6 hover:border-gold/50 transition-colors">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold/15 text-gold mb-4">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advocates */}
      <section className="border-t border-border/60 bg-gradient-to-b from-background to-card/30">
        <AdvocatesSection compact />
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-gold/30 bg-card/60 p-10 sm:p-14 text-center relative overflow-hidden">
            <Scale className="absolute -right-10 -top-10 h-48 w-48 text-gold/5" />
            <p className="eyebrow mb-3">Get in Touch</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold">
              For information regarding the chambers.
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              The contents of this website are for informational purposes only. Please reach
              out for queries regarding our practice areas and contact details.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full gradient-gold px-7 py-3.5 text-sm font-semibold text-gold-foreground shadow-elegant hover:opacity-95 transition-all"
            >
              Contact the Chambers <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
