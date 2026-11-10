"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { translations, type Language } from "./translations";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);
const languagePreferenceKey = "rania-portfolio-language";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("fr");

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem(languagePreferenceKey);
    const browserLanguage = navigator.language.toLowerCase().startsWith("fr") ? "fr" : "en";
    const initialLanguage: Language = savedLanguage === "fr" || savedLanguage === "en"
      ? savedLanguage
      : browserLanguage;
    // Browser preference is read after hydration so the server and first client render match.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLanguageState(initialLanguage);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (nextLanguage: Language) => {
    window.localStorage.setItem(languagePreferenceKey, nextLanguage);
    setLanguageState(nextLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return { ...context, t: translations[context.language] };
}
