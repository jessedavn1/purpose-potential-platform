import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import type { Locale } from "./types";
import { translations } from "./translations";

type TranslationKeys = typeof translations.en;

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | null>(null);

function getNestedValue(obj: any, path: string): string {
  const result = path.split(".").reduce((acc, key) => acc?.[key], obj);
  return typeof result === "string" ? result : path;
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("portfolio-locale");
      if (saved && saved in translations) return saved as Locale;
    }
    return "en";
  });

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    if (typeof window !== "undefined") {
      localStorage.setItem("portfolio-locale", l);
    }
  }, []);

  const t = useCallback(
    (key: string): string => {
      return getNestedValue(translations[locale], key) || getNestedValue(translations.en, key) || key;
    },
    [locale]
  );

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
