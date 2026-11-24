import { createContext, useContext, useMemo } from "react";
import * as content from "../data/content";
import rows from "./translations.json";

export const languages = [
  { code: "en", label: "EN", name: "English" },
  { code: "ru", label: "RU", name: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439" },
  { code: "uk", label: "UK", name: "\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430" },
  { code: "kk", label: "KK", name: "\u049a\u0430\u0437\u0430\u049b\u0448\u0430" },
];
export const LanguageContext = createContext(null);
const normalize = (text) => text.trim().replace(/\s+/g, " ").toLowerCase();
const dictionaries = Object.fromEntries(["ru", "uk", "kk"].map((code, index) => [
  code, new Map(rows.map((row) => [normalize(row[0]), row[index + 1]])),
]));

export function translate(text, language) {
  if (typeof text !== "string" || language === "en") return text;
  const dictionary = dictionaries[language];
  if (!dictionary) return text;
  const exact = dictionary.get(normalize(text));
  if (exact) return exact;
  // Preserve numbers, units and decorative arrows in composed labels.
  const arrow = text.match(/^([\u2190\s]*)(.*?)([\s\u2197\u2192\u2193]*)$/);
  if (arrow && (arrow[1] || arrow[3])) {
    const middle = dictionary.get(normalize(arrow[2]));
    if (middle) return arrow[1] + middle + arrow[3];
  }
  if (text.includes(" / ")) return text.split(" / ").map((part) => translate(part, language)).join(" / ");
  return text
    .replace(/\bPresent\b/g, dictionary.get("present"))
    .replace(/\bNEXT: PROJECT\b/g, dictionary.get("next: project"))
    .replace(/\bPROJECT\b/g, dictionary.get("project"))
    .replace(/\bPHOTO\b/g, dictionary.get("photo"));
}

const unchangedKeys = new Set(["id", "src", "image", "heroImage", "pdf", "url", "email", "linkedin", "github", "resume", "initials", "name"]);
function localize(value, language, key) {
  if (unchangedKeys.has(key)) return value;
  if (typeof value === "string") return translate(value, language);
  if (Array.isArray(value)) return value.map((item) => localize(item, language));
  if (value && typeof value === "object") return Object.fromEntries(Object.entries(value).map(([field, item]) => [field, localize(item, language, field)]));
  return value;
}
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("LanguageProvider is required");
  return context;
}
export function useContent() {
  const { language } = useLanguage();
  return useMemo(() => localize(content, language), [language]);
}
