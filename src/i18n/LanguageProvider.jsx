import { useEffect, useMemo, useState } from "react";
import { LanguageContext, languages, translate } from "./language";
import { languageSelectionEnabled } from "./config";

export default function LanguageProvider({ children }) {
  const [selectedLanguage, setLanguage] = useState(() => {
    if (!languageSelectionEnabled) return "en";
    try {
      const saved = localStorage.getItem("portfolio-language");
      return languages.some((item) => item.code === saved) ? saved : "en";
    } catch {
      return "en";
    }
  });
  const language = languageSelectionEnabled ? selectedLanguage : "en";
  useEffect(() => {
    document.documentElement.lang = language;
    if (!languageSelectionEnabled) return;
    try { localStorage.setItem("portfolio-language", language); } catch { /* Storage may be blocked. */ }
  }, [language]);
  const value = useMemo(() => ({
    language, setLanguage, t: (text) => translate(text, language),
  }), [language]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
