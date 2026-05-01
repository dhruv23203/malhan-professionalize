import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarCheck, MessageSquare, CreditCard, ShieldCheck, Scale, Users, Award, BookOpen } from "lucide-react";
import heroImage from "../assets/hero-law.jpg";
import { Counter } from "../components/Counter";
import { TestimonialMarquee } from "../components/TestimonialMarquee";
import { RotatingTestimonial } from "../components/RotatingTestimonial";
import { AdvocatesSection } from "../components/AdvocatesSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Malhan Associates — Clear Counsel. Strong Representation." },
      { name: "description", content: "Experienced advocates representing clients in civil, criminal, matrimonial, property and commercial matters since 1998." },
    ],
  }),
  component: HomePage,
});

const stats = [
  { value: 25, suffix: "+", label: "Years of Experience" },
  { value: 1500, suffix: "+", label: "Cases Handled" },
  { value: 1200, suffix: "+", label: "Cases Disposed Off" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 13, suffix: "", label: "Practice Areas" },
];

const highlights = [
  { icon: CalendarCheck, title: "Book an Appointment", desc: "Schedule a confidential consultation at a time that works for you." },
  { icon: MessageSquare, title: "Free Initial Consultation", desc: "Discuss your matter with our advocates before committing." },
  { icon: CreditCard, title: "Pay Fees Online", desc: "Secure online payment for retainers and case fees." },
];

const pillars = [
  { icon: ShieldCheck, title: "Trusted Legal Advice", desc: "Clear, practical guidance tailored to your situation from experienced advocates." },
  { icon: Users, title: "Experienced Lawyers", desc: "A team of specialists across civil, criminal, family and commercial law." },
  { icon: Award, title: "Result-Driven", desc: "Strategic representation focused on outcomes that genuinely matter to you." },
  { icon: BookOpen, title: "Across All Forums", desc: "Representation before every court, tribunal and quasi-judicial authority." },
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
        />
        <div className="absolute inset-0 gradient-hero" />
        <div className="relative mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="max-w-3xl animate-fade-up">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-gold" />
              <span className="eyebrow">Trusted Legal Counsel since 1998</span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] text-foreground">
              Clear Counsel. <span className="text-gold">Strong Representation.</span> Real Results.
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
                Book a Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/30 bg-background/30 backdrop-blur px-7 py-3.5 text-sm font-semibold text-foreground hover:border-gold hover:text-gold transition-all"
              >
                Learn More
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 text-center">
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

      {/* Featured testimonial */}
      <section className="py-24 bg-card/40 border-y border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="eyebrow mb-3">Client Voices</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold">
              What Our Clients Say
            </h2>
          </div>
          <RotatingTestimonial />
        </div>
      </section>

      {/* Marquee testimonials */}
      <section className="py-16">
        <TestimonialMarquee />
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-gold/30 bg-card/60 p-10 sm:p-14 text-center relative overflow-hidden">
            <Scale className="absolute -right-10 -top-10 h-48 w-48 text-gold/5" />
            <p className="eyebrow mb-3">Ready to Begin?</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold">
              Let's discuss your matter — confidentially.
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              The first consultation is on us. Tell us what you're facing and we'll outline
              the options ahead.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full gradient-gold px-7 py-3.5 text-sm font-semibold text-gold-foreground shadow-elegant hover:opacity-95 transition-all"
            >
              Book a Consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
