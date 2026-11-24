import { useEffect, useRef, useState } from "react";
import { useContent, useLanguage, languages } from "../i18n/language";
import { languageSelectionEnabled } from "../i18n/config";

export default function Nav({ route }) {
  const { site, projects } = useContent();
  const { t, language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const headerRef = useRef(null);
  const buttonRef = useRef(null);
  useEffect(() => {
    if (!open) return;
    const closeOutside = (event) => {
      if (!headerRef.current?.contains(event.target)) setOpen(false);
    };
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);
  const links = [
    { href: "#/", label: "HOME", match: "/" },
    ...projects.map((p) => ({ href: `#/project/${p.id}`, label: ({ "01": "Hybrid Turbine", "02": "eVTOL UAV", "03": "Testing & Electronics" })[p.id] ?? p.title, match: `/project/${p.id}` })),
    { href: "#/leadership", label: "Leadership and management", match: "/leadership" },
  ];
  return (
    <header className="nav" ref={headerRef}>
      <div className="wrap nav__in">
        <a className="logo" href="#/" onClick={() => setOpen(false)}>{site.initials}</a>
        <div className="nav__controls">
          {languageSelectionEnabled && <label className="language-picker">
            <span className="sr-only">{t("Language")}</span>
            <select value={language} onChange={(event) => setLanguage(event.target.value)} aria-label={t("Language")}>
              {languages.map((item) => <option key={item.code} value={item.code} lang={item.code} title={item.name} aria-label={item.name}>{item.label}</option>)}
            </select>
          </label>}
        <button ref={buttonRef} type="button" aria-controls="primary-navigation" className="burger" aria-expanded={open} aria-label={t("Toggle menu")} onClick={() => setOpen((wasOpen) => !wasOpen)}>
          {t(open ? "CLOSE" : "MENU")}
        </button>
        </div>
        <nav id="primary-navigation" aria-label={t("Main navigation")} className={`nav__links ${open ? "is-open" : ""}`}>
          <div className="nav__items">
          {links.map((l) => (
            <a key={l.href} href={l.href} className={route === l.match ? "active" : ""} aria-current={route === l.match ? "page" : undefined} onClick={() => setOpen(false)}>{t(l.label)}</a>
          ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
