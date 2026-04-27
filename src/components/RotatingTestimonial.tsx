import { useEffect, useState } from "react";
import { Quote } from "lucide-react";

const featured = [
  { text: "Malhan Associates turned a complex property matter into a clean, decisive victory. Their command of the law and the courtroom is exceptional.", author: "Rajesh Sharma", case: "Property Litigation, Delhi" },
  { text: "I approached them after years of delay elsewhere. Within months I had clarity, a strategy, and ultimately the result I had been waiting for.", author: "Priya Verma", case: "Matrimonial Matter" },
  { text: "Honest advice, transparent fees, and relentless preparation. They treat every case as if it were their own.", author: "Aman Khanna", case: "Criminal Defence" },
  { text: "From contract drafting to commercial disputes, their work has been meticulous and reliably commercial. A trusted partner for our firm.", author: "Suresh Kapoor", case: "Commercial Counsel" },
];

export function RotatingTestimonial() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % featured.length), 5500);
    return () => clearInterval(id);
  }, []);
  const t = featured[i];
  return (
    <div className="relative mx-auto max-w-3xl text-center">
      <Quote className="mx-auto h-10 w-10 text-gold/60 mb-6" />
      <div key={i} className="animate-fade-up">
        <p className="font-display text-2xl sm:text-3xl leading-relaxed text-foreground/95 italic">
          "{t.text}"
        </p>
        <div className="mt-8">
          <p className="text-base font-semibold text-gold">{t.author}</p>
          <p className="text-sm text-muted-foreground mt-1">{t.case}</p>
        </div>
      </div>
      <div className="mt-8 flex justify-center gap-2">
        {featured.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Show testimonial ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              idx === i ? "w-8 bg-gold" : "w-1.5 bg-muted-foreground/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
