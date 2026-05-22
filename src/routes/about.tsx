import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Scale, BookOpen, Users, Target, Compass, CheckCircle2 } from "lucide-react";
import { Counter } from "../components/Counter";
import { AdvocatesSection } from "../components/AdvocatesSection";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Malhan Associates" },
      { name: "description", content: "Two and a half decades of trusted legal practice across civil, criminal, family, property, commercial and environmental law." },
      { property: "og:title", content: "About Malhan Associates — Decades of Legal Excellence" },
      { property: "og:description", content: "Two and a half decades of trusted legal practice across civil, criminal, family, property, commercial and environmental law." },
      { property: "og:url", content: "/about" },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: ShieldCheck, title: "Integrity", desc: "Honest counsel, transparent fees and confidential advice — always." },
  { icon: Scale, title: "Diligence", desc: "Meticulous preparation in every brief, before every forum." },
  { icon: BookOpen, title: "Expertise", desc: "Deep specialisation across litigation, advisory and drafting." },
  { icon: Users, title: "Client-First", desc: "We listen first, then build a strategy around your real objectives." },
];

const services = [
  "Drafting and scrutiny of legal contracts and commercial documents",
  "Legal advisory and compliance support",
  "Representation before courts and quasi-judicial authorities",
  "Representation before the National Green Tribunal (NGT)",
  "Representation before State and Central Pollution Control Boards",
  "Pollution control and environmental compliance assistance",
];

function AboutPage() {
  return (
    <>
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="eyebrow mb-4">About Malhan Associates</p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold leading-tight">
            Built on <span className="text-gold">trust, experience</span> and results.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            An association of advocates highly experienced and skilled in their respective
            fields — providing end-to-end legal solutions with professionalism, effectiveness
            and practical strategy.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-border/60 bg-card/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
            {[
              { v: 25, s: "+", l: "Years in Practice" },
              { v: 13, s: "", l: "Practice Areas" },
              { v: 3, s: "", l: "Tiers of Courts" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-4xl sm:text-5xl font-bold text-gold tabular-nums">
                  <Counter value={s.v} suffix={s.s} />
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground font-semibold">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story + Services */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16">
          <div>
            <p className="eyebrow mb-3">Our Story</p>
            <h2 className="font-display text-4xl font-bold leading-tight">
              Two and a half decades of advocacy.
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Malhan Associates is an association of advocates highly experienced and skilled
                in their respective fields. With more than two and a half decades of legal
                practice, we specialise in civil, criminal, matrimonial and family disputes,
                property matters, MACT cases, cheque-bouncing matters and various other
                litigation-related issues.
              </p>
              <p>
                We also bring extensive expertise in commercial documentation, contract
                drafting, legal scrutiny and environmental law. Our team provides end-to-end
                legal solutions, ensuring professionalism, effectiveness and practical legal
                strategies.
              </p>
              <p>
                At Malhan Associates, we believe in working in a positive and client-oriented
                environment. Our aim is to provide timely, structured and result-driven legal
                assistance with a clear understanding of legal complexities.
              </p>
            </div>
          </div>
          <div>
            <p className="eyebrow mb-3">What We Offer</p>
            <h2 className="font-display text-4xl font-bold leading-tight">
              Our services.
            </h2>
            <ul className="mt-6 space-y-3">
              {services.map((s) => (
                <li
                  key={s}
                  className="flex items-start gap-3 rounded-xl border border-border/60 bg-card/50 p-4"
                >
                  <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/90 leading-relaxed">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 bg-card/40 border-y border-border/60">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Scale className="mx-auto h-10 w-10 text-gold mb-6" />
          <p className="font-display text-2xl sm:text-3xl font-medium leading-snug text-foreground/90 italic">
            “We help people achieve the outcomes that matter to them in their lives by providing
            high-quality advocacy, effective legal drafting, and trusted legal advice.”
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
          <div className="rounded-3xl border border-border/60 bg-card/50 p-8 sm:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold mb-5">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="font-display text-3xl font-bold">Mission</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We build lasting partnerships with our clients through personalised attention,
              clear communication and deep industry knowledge — pairing practical solutions with
              unwavering dedication to help our clients thrive in an increasingly complex legal
              environment.
            </p>
          </div>
          <div className="rounded-3xl border border-border/60 bg-card/50 p-8 sm:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold mb-5">
              <Compass className="h-6 w-6" />
            </div>
            <h3 className="font-display text-3xl font-bold">Vision</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              To become the most trusted name in legal advocacy across the region — known for our
              commitment to justice, community engagement and innovative legal solutions that
              make a lasting positive impact on society.
            </p>
          </div>
        </div>
      </section>

      {/* Advocates with full bios */}
      <section className="border-t border-border/60 bg-gradient-to-b from-background to-card/30">
        <AdvocatesSection />
      </section>

      {/* Values */}
      <section className="py-20 border-t border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow mb-3">What We Stand For</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold">Our values.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-border/60 bg-card/50 p-6 hover:border-gold/50 transition-colors">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold/15 text-gold mb-4">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full gradient-gold px-7 py-3.5 text-sm font-semibold text-gold-foreground shadow-elegant"
          >
            Speak with an Advocate <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
