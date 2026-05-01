import { useEffect, useState } from "react";
import { Scale } from "lucide-react";

const STORAGE_KEY = "malhan-disclaimer-accepted";

export function DisclaimerGate() {
  const [accepted, setAccepted] = useState(true); // assume accepted to avoid SSR flash

  useEffect(() => {
    try {
      const v = sessionStorage.getItem(STORAGE_KEY);
      if (v !== "1") setAccepted(false);
    } catch {
      setAccepted(false);
    }
  }, []);

  const onAgree = () => {
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* noop */
    }
    setAccepted(true);
  };

  if (accepted) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-md p-4">
      <div className="relative w-full max-w-2xl rounded-3xl border border-gold/30 bg-card shadow-elegant overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-1 gradient-gold" />
        <div className="p-8 sm:p-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-full gradient-gold">
              <Scale className="h-5 w-5 text-gold-foreground" strokeWidth={2.2} />
            </div>
            <div>
              <p className="eyebrow">Bar Council of India</p>
              <h2 className="font-display text-xl font-bold">Disclaimer</h2>
            </div>
          </div>

          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed max-h-[55vh] overflow-y-auto pr-1">
            <p>
              The Bar Council of India does not permit advertisement or solicitation by
              advocates in any form or manner. By accessing this website
              (<span className="text-foreground font-medium">www.malhanassociates.in</span>),
              you acknowledge and confirm that you are seeking information relating to
              <span className="text-foreground"> Malhan Associates </span>
              of your own accord and that there has been no form of solicitation,
              advertisement or inducement by Malhan Associates or any of its members.
            </p>
            <p>
              Under the rules of the Bar Council of India, an advocate is prohibited from
              soliciting work or advertising through communication in public domain. This
              website is meant solely for the purposes of providing information and not for
              the purpose of advertising.
            </p>
            <p>
              The content of this website is for informational purposes only and should not
              be interpreted as soliciting or advertisement. No material/information provided
              on this website should be construed as legal advice. Malhan Associates shall
              not be liable for consequences of any action taken by relying on the
              material/information provided on this website.
            </p>
          </div>

          <div className="mt-7 flex flex-col-reverse sm:flex-row gap-3 sm:justify-end">
            <a
              href="https://www.google.com"
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors"
            >
              I Decline
            </a>
            <button
              type="button"
              onClick={onAgree}
              className="inline-flex items-center justify-center rounded-full gradient-gold px-7 py-3 text-sm font-semibold text-gold-foreground shadow-elegant hover:opacity-95 transition-all"
            >
              I Agree & Enter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
