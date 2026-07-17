import { useLanguage } from '../../context/LanguageContext';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import visionData from '../../../data/vision';
import styles from './Vision.module.css';

export default function Vision() {
  const { language } = useLanguage();
  const data = visionData[language];
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="vision" className={styles.section}>
      <div className={styles.bgDecor} />
      <div className="section-container" ref={ref}>
        <div className={styles.card}>
          <div className={styles.iconWrap}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </div>
          <h2 className={styles.title}>{data.title}</h2>
          <p className={styles.description}>{data.description}</p>
          <div className={styles.accentLine} />
        </div>
      </div>
    </section>
  );
}
