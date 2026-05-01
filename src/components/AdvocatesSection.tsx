import ramnathImg from "../assets/lawyer-ramnath.webp";
import rajniImg from "../assets/lawyer-rajni.webp";

export type Advocate = {
  name: string;
  title: string;
  image: string;
  bio: string;
};

export const advocates: Advocate[] = [
  {
    name: "Rajni Malhan",
    title: "Advocate · B.Com, LLB & LLM",
    image: rajniImg,
    bio: "In legal practice since 1999, Rajni Malhan handles a wide spectrum of matters — Civil, Criminal, Matrimonial, Cheque Bouncing, Property Disputes, Motor Accident Claims Tribunal, Consumer and Revenue matters — appearing before the District Courts, the Hon'ble High Court and the Hon'ble Supreme Court of India. She is a trained Mediator of the Delhi High Court and DDRS, and serves as an appointed Mediator at Tis Hazari Court, Delhi. Her practice is marked by sincerity, efficiency and effective representation.",
  },
  {
    name: "Ram Nath Malhan",
    title: "Advocate · B.Sc (H) Botany, PG Dip. Industrial Pollution Mgmt., LLB",
    image: ramnathImg,
    bio: "Ram Nath Malhan brings a rare blend of engineering and legal expertise. He began his career in 1996 in the engineering field — covering steam boilers, small turbines, condensers and allied lines — and from 2000 worked in water and waste-water treatment, with responsibility for design, documentation and commissioning of pollution-control and environmental plants. As an advocate, he actively represents clients before the District Courts and the Hon'ble High Court in Civil, Criminal, Matrimonial, MACT and Cheque Bouncing matters, and is a skilled drafter of legal cases, contracts, MOUs, agreements and bespoke commercial documents.",
  },
];

type Props = {
  compact?: boolean;
};

export function AdvocatesSection({ compact = false }: Props) {
  return (
    <section className={compact ? "py-20" : "py-24"}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="eyebrow mb-3">Meet Our Advocates</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight">
            The faces behind <span className="text-gold">Malhan Associates</span>
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            A close-knit chamber led by two seasoned advocates with decades of combined
            courtroom, tribunal and advisory experience.
          </p>
        </div>

        <div className="grid gap-10 lg:gap-14 md:grid-cols-2">
          {advocates.map((a) => (
            <article
              key={a.name}
              className="group relative rounded-3xl border border-border/60 bg-card/50 overflow-hidden hover:border-gold/50 transition-colors"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={a.image}
                  alt={`${a.name}, ${a.title}`}
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={1000}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                    {a.name}
                  </h3>
                  <p className="mt-1 text-sm text-gold font-semibold tracking-wide">
                    {a.title}
                  </p>
                </div>
              </div>
              {!compact && (
                <div className="p-6 sm:p-7">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {a.bio}
                  </p>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
