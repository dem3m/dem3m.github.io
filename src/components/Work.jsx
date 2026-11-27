import { useContent, useLanguage } from "../i18n/language";
import Placeholder from "./Placeholder";

export default function Work() {
  const { projects } = useContent();
  const { t } = useLanguage();
  return (
    <section id="selected-work" className="wrap section">
      <h2 className="section__title">{t("Selected work / 01\u201403")}</h2>
      {projects.map((p) => (
        <article key={p.id} className="work">
          <a className={`work__img${p.cardLayout === "portrait" ? " work__img--portrait" : ""}`} href={`#/project/${p.id}`} aria-label={p.title}>
            <Placeholder src={p.cardImage ?? p.image} ratio={p.cardLayout === "portrait" ? "4 / 5" : "16 / 10"} label={`PROJECT ${p.id} / IMAGE`} alt={p.title} />
          </a>
          <div className="work__text">
            <p className="label">{p.category}</p>
            <h3>{p.title}</h3>
            <p className="work__summary">{p.summary}</p>
            <a className="link" href={`#/project/${p.id}`}>{t("View project \u2197")}</a>
          </div>
        </article>
      ))}
    </section>
  );
}
