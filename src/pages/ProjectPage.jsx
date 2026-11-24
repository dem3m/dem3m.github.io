import { useContent, useLanguage } from "../i18n/language";
import mediaDimensions from "../data/mediaDimensions.json";

const base = import.meta.env.BASE_URL;
const has = (items) => Array.isArray(items) && items.length > 0;

function Block({ label, children }) {
  const { t } = useLanguage();
  return (
    <section className="rule block project-block">
      <h2 className="label">{t(label)}</h2>
      <div className="project-block__body">{children}</div>
    </section>
  );
}

function Bullets({ items }) {
  return <ul className="bul">{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

function Details({ label, children }) {
  return (
    <details className="project-details">
      <summary>{label}</summary>
      <div className="project-details__body">{children}</div>
    </details>
  );
}

function EvidenceFigure({ media, hero = false, portrait = false }) {
  const { t } = useLanguage();
  return (
    <figure className={`evidence-figure${hero ? " evidence-figure--hero" : ""}${portrait ? " evidence-figure--portrait" : ""}${media.uncropped ? " evidence-figure--wide" : ""}`}>
      <a className="evidence-frame" href={`${base}${media.src}`} target="_blank" rel="noreferrer" aria-label={`${t("View full-size")}: ${media.caption} (${t("new tab")})`}>
        <img src={`${base}${media.src}`} alt={media.caption} width={mediaDimensions[media.src]?.width} height={mediaDimensions[media.src]?.height} loading={hero ? "eager" : "lazy"} />
      </a>
      <figcaption>{media.caption}</figcaption>
    </figure>
  );
}

function Evidence({ items, gallery = false }) {
  return (
    <div className={gallery ? "gallery-grid" : "project-evidence"}>
      {items.filter((media) => media.src).map((media) => <EvidenceFigure key={media.src} media={media} />)}
    </div>
  );
}

export default function ProjectPage({ id }) {
  const { projects } = useContent();
  const { t } = useLanguage();
  const p = projects.find((project) => project.id === id);
  if (!p) return (
    <section className="wrap section">
      <h1 className="display sm">{t("NOT FOUND.")}</h1>
      <a className="link" href="#/">&larr; {t("HOME")}</a>
    </section>
  );

  const next = projects[(projects.indexOf(p) + 1) % projects.length];
  const gallery = (p.media ?? []).filter((media) => media.src);
  const selected = gallery.filter((media) => media.featured);
  const featured = selected.length ? selected : gallery.slice(0, 2);
  const additional = gallery.filter((media) => !featured.includes(media));
  const hero = p.image ?? p.cardImage;

  return (
    <section key={p.id} className="wrap section project-page">
      <div className="grid rule">
        <p className="label c-6">{t("PROJECT")} {p.id} / 03</p>
        <p className="label c-6 right">{p.category}</p>
      </div>
      <h1 className="display sm">{p.title}</h1>

      <div className="project-intro">
        <div className="project-intro__copy">
          <h2 className="label">{t("OVERVIEW")}</h2>
          <p className="lead">{p.summary}</p>
          <p className="project-role"><span className="label">{t("ROLE")}</span>{p.role}</p>
          {p.contribution && <div className="project-contribution"><h2 className="label">My contribution</h2><p>{p.contribution}</p></div>}
          {p.link?.url && <a className="link" href={p.link.url} target="_blank" rel="noreferrer">{p.link.label}</a>}
        </div>
        {hero && <EvidenceFigure media={{ src: hero, caption: p.heroCaption ?? p.title }} hero portrait={p.cardLayout === "portrait"} />}
      </div>

      {has(p.highlights) && <ul className="project-highlights" aria-label="Project highlights" style={{ "--highlight-count": p.highlights.length }}>
        {p.highlights.map((item) => <li key={item.label}><strong>{item.value}</strong><span>{item.label}</span></li>)}
      </ul>}

      <div className="blocks">
        {/* Work Featured is hidden. Keep p.work and this markup for restoration:
        {has(p.work) && <Block label="WORK FEATURED"><Bullets items={p.work} /></Block>}
        */}
        <Block label={p.taskTitle ?? "SPECIFIC WORK"}>
          <h3 className="sub">{t("Task objective")}</h3>
          <p>{p.objective}</p>
          {has(p.results) && <><h3 className="sub">{t("Task results")}</h3><Bullets items={p.results.slice(0, 2)} /></>}
          {has(p.taskMedia) && <Evidence items={p.taskMedia.slice(0, 1)} />}
          {(has(p.requirements) || p.results?.length > 2 || p.taskMedia?.length > 1) && <Details label="Requirements and supporting work">
            {has(p.requirements) && <><h3 className="sub">{t("Task requirements")}</h3><Bullets items={p.requirements} /></>}
            {p.results?.length > 2 && <><h3 className="sub">Additional results</h3><Bullets items={p.results.slice(2)} /></>}
            {p.taskMedia?.length > 1 && <Evidence items={p.taskMedia.slice(1)} />}
          </Details>}
        </Block>

        {p.technicalWork?.map((task) => <Block key={task.title} label={task.title}>
          <h3 className="sub">{t("Task objective")}</h3>
          <p>{task.objective[0]}</p>
          <h3 className="sub">{t("Task results")}</h3>
          <Bullets items={task.results.slice(0, 2)} />
          <p className="technical-note">{task.note}</p>
          {has(task.media) && <Evidence items={task.media.slice(0, 1)} />}
          <Details label="Analysis setup, full results and response plots">
            {task.objective.slice(1).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <h3 className="sub">{t("Task requirements")}</h3>
            <Bullets items={task.requirements} />
            <h3 className="sub">Additional results</h3>
            <Bullets items={task.results.slice(2)} />
            <Evidence items={task.media.slice(1)} />
          </Details>
        </Block>)}

        {has(p.other) && <Block label="OTHER INCLUDED WORK">
          <Bullets items={p.other} />
          {has(p.otherMedia) && <Evidence items={p.otherMedia} />}
        </Block>}

        {p.researchPoster && <Block label="RESEARCH POSTER">
          <h3 className="poster-title">{p.researchPoster.title}</h3>
          <p>{p.researchPoster.description}</p>
          <div className="poster-links"><a className="link" href={p.researchPoster.url} target="_blank" rel="noreferrer">{t("OFFICIAL ERAU SCHOLARLY COMMONS PAGE")} &#8599;</a></div>
          <Details label="Read the research poster">
            <iframe className="poster-viewer" src={`${base}${p.researchPoster.pdf}#toolbar=0&navpanes=0&view=FitH`} title={p.researchPoster.title} loading="lazy" />
          </Details>
        </Block>}

        {has(featured) && <Block label="Project Gallery">
          <Evidence items={featured} gallery />
          {has(additional) && <Details label={`More project photos and figures (${additional.length})`}><Evidence items={additional} gallery /></Details>}
        </Block>}

        {(p.background || has(p.grants) || p.poster) && <Details label="Project background, grants and awards">
          {p.background && <><h2 className="sub">{t("BACKGROUND")}</h2><p>{p.background}</p></>}
          {has(p.grants) && <><h2 className="sub">{t("GRANTS & AWARDS")}</h2><Bullets items={p.grants} /></>}
          {p.poster && <a className="link" href={`${base}${p.poster}`} target="_blank" rel="noreferrer">{t("VIEW POSTER")} &#8599;</a>}
        </Details>}
      </div>

      <div className="grid rule top">
        <a className="link c-6" href="#/">&larr; {t("HOME")}</a>
        <a className="link c-6 right" href={`#/project/${next.id}`}>{t("NEXT: PROJECT")} {next.id} &#8599;</a>
      </div>
    </section>
  );
}
