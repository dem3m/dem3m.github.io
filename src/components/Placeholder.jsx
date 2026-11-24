import { useLanguage } from "../i18n/language";
import mediaDimensions from "../data/mediaDimensions.json";

export default function Placeholder({ src, label = "IMAGE", ratio = "16 / 9", alt = "" }) {
  const { t } = useLanguage();
  const url = src ? `${import.meta.env.BASE_URL}${src}` : null;
  return (
    <div className="media" style={{ aspectRatio: ratio }}>
      {url ? <img src={url} alt={alt} width={mediaDimensions[src]?.width} height={mediaDimensions[src]?.height} loading="lazy" /> : (
        <div className="ph"><span>{t(label)}</span><i /><i /></div>
      )}
    </div>
  );
}
