import { useContent, useLanguage } from "../i18n/language";

export default function Footer() {
  const { site } = useContent();
  const { t } = useLanguage();
  return (
    <footer className="foot mat">
      <div className="wrap">
        <div className="grid foot__top">
          <div className="c-6">
            <p className="foot__name">{site.name}</p>
            <p className="label">{t("Aerospace engineering")}</p>
          </div>
          <div className="c-6 foot__contact">
            <h2 className="label">Contact:</h2>
            <ul className="foot__links">
              <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
              <li><a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn &#8599;</a></li>
            </ul>
          </div>
        </div>
        <p className="label foot__copy">© {site.year} {site.name}</p>
      </div>
    </footer>
  );
}
