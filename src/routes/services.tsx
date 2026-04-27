import { createFileRoute, Link } from "@tanstack/react-router";
import { Gavel, Home, Heart, Briefcase, FileText, Car, Receipt, Leaf, Building2, ShieldCheck, BookOpen, Users, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Malhan Associates" },
      { name: "description", content: "Civil, criminal, matrimonial, property, MACT, cheque bounce, commercial and environmental law services." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Gavel, title: "Civil Litigation", desc: "Suits for recovery, declaration, injunction, partition and specific performance." },
  { icon: ShieldCheck, title: "Criminal Defence", desc: "Bail, trial and appellate representation in all criminal matters." },
  { icon: Heart, title: "Matrimonial & Family", desc: "Divorce, maintenance, custody and mutual settlements with sensitivity." },
  { icon: Home, title: "Property Matters", desc: "Title disputes, eviction, partition, lease and conveyancing." },
  { icon: Car, title: "MACT Claims", desc: "Motor accident compensation claims pursued to fair settlement." },
  { icon: Receipt, title: "Cheque Bouncing", desc: "Section 138 NI Act prosecution and defence with proven results." },
  { icon: Briefcase, title: "Commercial Disputes", desc: "Contract enforcement, arbitration and commercial litigation." },
  { icon: FileText, title: "Drafting & Scrutiny", desc: "Contracts, agreements, deeds and corporate documentation." },
  { icon: Leaf, title: "Environmental Law", desc: "NGT matters, compliance and environmental clearances." },
  { icon: Building2, title: "Real Estate & RERA", desc: "Builder-buyer disputes, RERA complaints and project advisory." },
  { icon: BookOpen, title: "Legal Opinions", desc: "Considered written opinions for individuals and businesses." },
  { icon: Users, title: "Consumer Forums", desc: "Representation in District, State and National consumer commissions." },
];

function ServicesPage() {
  return (
    <>
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="eyebrow mb-4">Our Services</p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold leading-tight">
            Comprehensive <span className="text-gold">legal practice</span>.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            From the trial court to the High Court, from contracts to courtroom — we cover the
            full spectrum of legal needs for individuals, families and enterprises.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="group rounded-2xl border border-border/60 bg-card/50 p-7 hover:border-gold/50 hover:bg-card transition-all"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-gold mb-5 group-hover:scale-105 transition-transform">
                  <s.icon className="h-5 w-5 text-gold-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold">
            Don't see your matter listed?
          </h2>
          <p className="mt-4 text-muted-foreground">
            We take on a wide range of matters beyond the categories above. Reach out and we'll
            tell you honestly whether we're the right counsel for you.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full gradient-gold px-7 py-3.5 text-sm font-semibold text-gold-foreground shadow-elegant"
          >
            Get in Touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
