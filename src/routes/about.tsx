import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Scale, BookOpen, Users } from "lucide-react";
import { Counter } from "../components/Counter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Malhan Associates" },
      { name: "description", content: "Two and a half decades of trusted legal practice across civil, criminal, family, property and commercial law." },
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
            Founded in 1998, Malhan Associates is a chamber of advocates committed to clear
            counsel and strong representation. We act for individuals, families and businesses
            in matters that demand both rigour and discretion.
          </p>
        </div>
      </section>

      <section className="py-12 border-y border-border/60 bg-card/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            {[
              { v: 25, s: "+", l: "Years in Practice" },
              { v: 1500, s: "+", l: "Cases Handled" },
              { v: 98, s: "%", l: "Client Satisfaction" },
              { v: 13, s: "", l: "Practice Areas" },
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

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16">
          <div>
            <p className="eyebrow mb-3">Our Story</p>
            <h2 className="font-display text-4xl font-bold leading-tight">
              Two and a half decades of advocacy.
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Established in 1998, Malhan Associates began with a simple commitment: to
                represent each client with the care, diligence and honesty they deserve. Today,
                that commitment continues to define our chamber.
              </p>
              <p>
                Our advocates appear before trial courts, district courts, tribunals and the
                High Court across a wide spectrum of matters — from sensitive family disputes to
                complex commercial and property litigation.
              </p>
              <p>
                Beyond the courtroom, we offer transactional and advisory services including
                contract drafting, legal scrutiny, due diligence and environmental compliance.
              </p>
            </div>
          </div>
          <div>
            <p className="eyebrow mb-3">What We Stand For</p>
            <h2 className="font-display text-4xl font-bold leading-tight">Our values.</h2>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {values.map((v) => (
                <div key={v.title} className="rounded-xl border border-border/60 bg-card/50 p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/15 text-gold mb-3">
                    <v.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold">{v.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
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
