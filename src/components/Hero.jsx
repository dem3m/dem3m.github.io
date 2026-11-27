import { useContent, useLanguage } from "../i18n/language";
import Placeholder from "./Placeholder";

export default function Hero() {
  const { site } = useContent();
  const { t } = useLanguage();
  const scrollToWork = () => document.getElementById("selected-work")?.scrollIntoView({ behavior: "smooth" });
  return (
    <section className="wrap hero">
      <div className="hero__text">
        <p className="hero__role">{t("Aerospace engineering")}</p>
        <h1 className="hero__title">{site.name}</h1>
        <p className="hero__focus">{t("Propulsion/Experimentation/Design")}</p>
        <p className="hero__lede">{site.intro}</p>
        <div className="hero__actions">
          <button type="button" className="button button--solid" onClick={scrollToWork}>{t("Selected work / 01\u201403")} <span aria-hidden="true">&darr;</span></button>
          <a className="button button--ghost" href={`mailto:${site.email}`}>{t("Contact")}</a>
        </div>
      </div>
      <figure className="hero__photo">
        <Placeholder src="images/project-01/ADAMIRL.jpg" ratio="4 / 5" alt="ADAM hybrid turbojet hardware on a workbench" />
      </figure>
    </section>
  );
}
