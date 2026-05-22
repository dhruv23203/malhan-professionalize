import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageSquare, ShieldCheck, FileQuestion, Clock } from "lucide-react";

export const Route = createFileRoute("/legal-advice")({
  head: () => ({
    meta: [
      { title: "Legal Advice — Malhan Associates" },
      { name: "description", content: "Confidential legal consultations and written opinions from experienced advocates." },
      { property: "og:title", content: "Legal Advice — Malhan Associates" },
      { property: "og:description", content: "Confidential legal consultations and written opinions from experienced advocates." },
      { property: "og:url", content: "/legal-advice" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: LegalAdvicePage,
});

const faqs = [
  { q: "Is the first consultation really free?", a: "Yes. We offer a complimentary initial consultation so you can discuss your matter without commitment and decide whether we're the right counsel for you." },
  { q: "How is confidentiality maintained?", a: "Every conversation, document and detail you share is protected by attorney-client privilege. Your matter is discussed only within our authorised team." },
  { q: "Can I get advice without filing a case?", a: "Absolutely. Many clients come to us for a written opinion or strategic guidance long before — or instead of — entering litigation." },
  { q: "Do you handle out-of-court settlements?", a: "Yes. Where it serves your interests, we actively explore mediation, negotiation and settlement before recommending litigation." },
  { q: "How are fees structured?", a: "Fees depend on the matter's complexity and forum. We provide transparent, written fee proposals before any engagement begins." },
  { q: "Do you appear in courts outside our city?", a: "We regularly appear across courts and tribunals in the region and coordinate counsel where required for matters elsewhere." },
];

const steps = [
  { icon: MessageSquare, title: "Reach Out", desc: "Call or write to us with a brief outline of your matter." },
  { icon: Clock, title: "Schedule", desc: "We'll arrange a consultation at a time that suits you." },
  { icon: ShieldCheck, title: "Confidential Discussion", desc: "Share the facts in confidence with an experienced advocate." },
  { icon: FileQuestion, title: "Written Strategy", desc: "Receive a clear plan of action, fees and timelines." },
];

function LegalAdvicePage() {
  return (
    <>
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="eyebrow mb-4">Legal Advice</p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold leading-tight">
            Honest answers, <span className="text-gold">before you act</span>.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Good decisions start with good counsel. We provide confidential, practical advice
            so you understand your options before committing to any course of action.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.title} className="rounded-2xl border border-border/60 bg-card/50 p-6 relative">
                <span className="absolute top-5 right-5 text-xs font-semibold text-gold/60">0{i + 1}</span>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl gradient-gold mb-4">
                  <s.icon className="h-5 w-5 text-gold-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-border/60">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="eyebrow mb-3">Frequently Asked</p>
            <h2 className="font-display text-4xl font-bold">Questions clients often ask</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details
                key={i}
                className="group rounded-xl border border-border/60 bg-card/50 p-6 open:border-gold/40 open:bg-card transition-colors"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 list-none">
                  <span className="font-display text-lg font-semibold pr-4">{f.q}</span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold text-lg group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full gradient-gold px-7 py-3.5 text-sm font-semibold text-gold-foreground shadow-elegant"
          >
            Request a Consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
