import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { dict, type Dict, type Lang } from "./dictionary";

interface Ctx {
  lang: Lang;
  toggle: () => void;
  t: Dict;
}

const LanguageContext = createContext<Ctx>({
  lang: "es",
  toggle: () => {},
  t: dict.es as unknown as Dict,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("lang") as Lang | null;
      if (stored === "es" || stored === "en") setLang(stored);
      else if (typeof navigator !== "undefined" && navigator.language.startsWith("en")) setLang("en");
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const toggle = () => {
    setLang((prev) => {
      const next: Lang = prev === "es" ? "en" : "es";
      try {
        localStorage.setItem("lang", next);
      } catch {}
      return next;
    });
  };

  const t = dict[lang] as unknown as Dict;

  return (
    <LanguageContext.Provider value={{ lang, toggle, t }}>{children}</LanguageContext.Provider>
  );
}

export const useI18n = () => useContext(LanguageContext);
