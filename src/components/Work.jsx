import { useContent, useLanguage } from "../i18n/language";
import Placeholder from "./Placeholder";

export default function Work() {
  const { projects } = useContent();
  const { t } = useLanguage();
  return (
    <section id="selected-work" className="wrap section">
      <div className="grid rule"><h2 className="label c-12">{t("SELECTED WORK / 01\u201403")}</h2></div>
      {projects.map((p, i) => (
        <article key={p.id} className={`grid work ${i % 2 ? "flip" : ""}`}>
          <div className="work__text">
            <p className="label">{t("PROJECT")} {p.id}</p>
            <h3>{p.title}</h3>
            <p className="label muted">{p.category}</p>
            <p>{p.summary}</p>
            <a className="link" href={`#/project/${p.id}`}>{t("VIEW PROJECT \u2197")}</a>
          </div>
          <a className={`work__img${p.cardLayout === "portrait" ? " work__img--portrait" : " work__img--landscape"}`} href={`#/project/${p.id}`} aria-label={p.title}>
            <Placeholder src={p.cardImage ?? p.image} ratio={p.cardLayout === "portrait" ? "4 / 5" : "16 / 10"} label={`PROJECT ${p.id} / IMAGE`} alt={p.title} />
          </a>
        </article>
      ))}
    </section>
  );
}
