import { Quote } from "lucide-react";

const testimonials = [
  { text: "Malhan Associates handled my property dispute with extraordinary diligence. The matter was resolved far sooner than I expected.", author: "R. Sharma", case: "Property Litigation" },
  { text: "Clear, honest advice from day one. They explained every step and never left me guessing about what came next.", author: "P. Verma", case: "Matrimonial Matter" },
  { text: "Their preparation in the courtroom was exceptional. I felt fully represented and protected throughout the proceedings.", author: "A. Khanna", case: "Criminal Defence" },
  { text: "Professional, responsive, and deeply knowledgeable. The contract drafting work was meticulous.", author: "S. Kapoor", case: "Commercial Contract" },
  { text: "I had lost hope after years of delay. They took over and delivered a result I genuinely thought wasn't possible.", author: "M. Ahuja", case: "Civil Suit" },
  { text: "Compassionate counsel during a difficult family matter. They balanced firmness with sensitivity beautifully.", author: "N. Bedi", case: "Family Dispute" },
  { text: "The MACT claim was settled fairly and without unnecessary litigation. Truly result-driven advocates.", author: "K. Singh", case: "MACT Claim" },
  { text: "A cheque-bouncing case I had given up on was won decisively. I will always recommend their chambers.", author: "T. Mehra", case: "NI Act Matter" },
];

function Card({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <div className="mx-3 w-[340px] sm:w-[420px] shrink-0 rounded-2xl border border-border/60 bg-card/60 p-7 backdrop-blur">
      <Quote className="h-7 w-7 text-gold/70 mb-3" />
      <p className="text-sm leading-relaxed text-foreground/90">
        "{t.text}"
      </p>
      <div className="mt-5 pt-4 border-t border-border/50">
        <p className="text-sm font-semibold text-gold">{t.author}</p>
        <p className="text-xs text-muted-foreground mt-0.5">{t.case}</p>
      </div>
    </div>
  );
}

export function TestimonialMarquee() {
  // Duplicate for seamless loop
  const items = [...testimonials, ...testimonials];
  return (
    <div className="relative overflow-hidden py-2"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div className="flex marquee w-max">
        {items.map((t, i) => (
          <Card key={i} t={t} />
        ))}
      </div>
    </div>
  );
}
