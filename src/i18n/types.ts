export type Locale = "en" | "fr" | "de" | "es" | "sw" | "rw";

export const localeNames: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  de: "Deutsch",
  es: "Español",
  sw: "Kiswahili",
  rw: "Ikinyarwanda",
};

export const localeFlags: Record<Locale, string> = {
  en: "🇬🇧",
  fr: "🇫🇷",
  de: "🇩🇪",
  es: "🇪🇸",
  sw: "🇹🇿",
  rw: "🇷🇼",
};
