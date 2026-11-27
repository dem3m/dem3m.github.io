import { useContent, useLanguage } from "../i18n/language";
import mediaDimensions from "../data/mediaDimensions.json";

export default function Leadership() {
  const { leadership } = useContent();
  const { t } = useLanguage();
  return (
    <section className="wrap section leadership-page">
      <div className="grid rule"><p className="label c-6">{t("Leadership & management")}</p><p className="label c-6 right">{t("Team development & mentorship")}</p></div>
      <h1 className="display sm">Leadership and Management</h1>
      <div className="leadership-list">
        {leadership.map((role) => (
          <article key={role.role} className="leadership-role">
            <header className="leadership-heading">
              {role.dates && <p className="label muted">{role.dates}</p>}
              <h2>{role.role}</h2>
              {role.org && <p className="label">{role.org}</p>}
              <div className="leadership-team">
                <span className="leadership-count">{role.people}</span>
                <div><p className="label">{t("People led")}</p><p>{role.team}</p></div>
              </div>
              {role.students && (
                <div className="leadership-team">
                  <span className="leadership-count">{role.students}</span>
                  <div><p className="label">{t("Students taught")}</p><p>{role.studentGroup}</p></div>
                </div>
              )}
            </header>
            <div className="leadership-details">
              {role.focus && <div><h3 className="label">{t("Coordination & management")}</h3><p>{role.focus}</p></div>}
              {role.topics.length > 0 && <div><h3 className="label">{t("Topics taught")}</h3><ul className="leadership-topics">{role.topics.map((topic) => <li key={topic}>{topic}</li>)}</ul></div>}
              {role.outcome && <div className="leadership-outcome"><h3 className="label">{t("Goals accomplished")}</h3><p>{role.outcome}</p>{role.highlight && <div className="leadership-highlight"><strong>{role.highlight}</strong><span>{role.highlightLabel}</span></div>}</div>}
              {role.image && (
                <figure className="leadership-photo">
                  <a href={`${import.meta.env.BASE_URL}${role.image}`} target="_blank" rel="noreferrer" aria-label={`${t("View full-size")}: ${role.role} (${t("new tab")})`}>
                    <img src={`${import.meta.env.BASE_URL}${role.image}`} alt={role.imageCaption} width={mediaDimensions[role.image]?.width} height={mediaDimensions[role.image]?.height} loading="lazy" />
                  </a>
                  <figcaption className="label muted">{role.imageCaption}</figcaption>
                </figure>
              )}
            </div>
          </article>
        ))}
      </div>
      <div className="grid rule top"><a className="link c-6" href="#/">{t("\u2190 Home")}</a></div>
    </section>
  );
}
