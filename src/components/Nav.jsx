import { useContent, useLanguage, languages } from "../i18n/language";
import { languageSelectionEnabled } from "../i18n/config";

export default function Nav({ route }) {
  const { site, projects } = useContent();
  const { t, language, setLanguage } = useLanguage();
  const links = [
    { href: "#/", label: "Home", match: "/" },
    ...projects.map((p) => ({ href: `#/project/${p.id}`, label: ({ "01": "Hybrid Turbine", "02": "eVTOL UAV", "03": "Testing & Electronics" })[p.id] ?? p.title, match: `/project/${p.id}` })),
    { href: "#/leadership", label: "Leadership and management", match: "/leadership" },
  ];
  return (
    <header className="nav">
      <div className="wrap nav__in">
        <a className="logo" href="#/">{site.initials}</a>
        {languageSelectionEnabled && <div className="nav__controls"><label className="language-picker">
            <span className="sr-only">{t("Language")}</span>
            <select value={language} onChange={(event) => setLanguage(event.target.value)} aria-label={t("Language")}>
              {languages.map((item) => <option key={item.code} value={item.code} lang={item.code} title={item.name} aria-label={item.name}>{item.label}</option>)}
            </select>
          </label></div>}
        <nav id="primary-navigation" aria-label={t("Main navigation")} className="nav__links">
          <div className="nav__items">
          {links.map((l) => (
            <a key={l.href} href={l.href} className={route === l.match ? "active" : ""} aria-current={route === l.match ? "page" : undefined}>{t(l.label)}</a>
          ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
