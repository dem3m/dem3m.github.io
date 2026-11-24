import { useContent, useLanguage } from "../i18n/language";

export default function Hero() {
  const { site } = useContent();
  const { t } = useLanguage();
  return (
    <section className="hero wrap">
      <div className="grid rule">
        <p className="label c-4">{t("PORTFOLIO")} / {site.year}</p>
        <p className="label c-8 right">{t("SELECTED ENGINEERING WORK")}</p>
      </div>
      <div className="hero-intro">
        <div className="hero-intro__main">
          <h1 className="hero-intro__title">{site.name}</h1>
          <p className="hero-intro__discipline">{t("Propulsion/Experimentation/Design")}</p>
          <p className="hero-intro__description">{site.intro}</p>
        </div>
        <aside className="hero-focus" aria-label={t("Engineering focus")}>
          <p className="label">{t("FROM CONCEPT TO TEST")}</p>
          <ol>
            <li><div><h2>{t("Design")}</h2><p>{t("CAD & systems integration")}</p></div></li>
            <li><div><h2>{t("Simulate")}</h2><p>{t("CFD & propulsion analysis")}</p></div></li>
            <li><div><h2>{t("Build & test")}</h2><p>{t("Fabrication & data acquisition")}</p></div></li>
          </ol>
        </aside>
      </div>
    </section>
  );
}
