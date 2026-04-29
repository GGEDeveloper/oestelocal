"use client";
import { useLang } from "@/lib/i18n";

export function LangSwitcher() {
  const { lang, setLang } = useLang();
  return (
    <div className="inline-flex items-center gap-1 rounded-full border hairline p-1 text-[11px] uppercase tracking-[0.18em]">
      <button
        type="button"
        onClick={() => setLang("pt")}
        className={`rounded-full px-2 py-1 transition ${
          lang === "pt" ? "bg-ink text-cream-50" : "text-ink/60 hover:text-ink"
        }`}
        aria-pressed={lang === "pt"}
      >
        PT
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`rounded-full px-2 py-1 transition ${
          lang === "en" ? "bg-ink text-cream-50" : "text-ink/60 hover:text-ink"
        }`}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
    </div>
  );
}
