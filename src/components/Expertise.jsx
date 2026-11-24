import { useContent, useLanguage } from "../i18n/language";

export default function Expertise() {
  const { expertise } = useContent();
  const { t } = useLanguage();
  return (
    <section className="band">
      <div className="wrap section">
        <div className="grid rule"><h2 className="label c-12">{t("TECHNICAL EXPERTISE")}</h2></div>
        <div className="grid exp">
          {expertise.map((e) => (
            <div key={e.title} className="exp__item">
              <h3 className="label">{e.title}</h3>
              <ul className="exp__list">
                {e.skills.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}