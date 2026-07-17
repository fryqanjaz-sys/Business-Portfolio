import { useLanguage } from '../../context/LanguageContext';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import missionData from '../../../data/mission';
import styles from './Mission.module.css';

export default function Mission() {
  const { language } = useLanguage();
  const data = missionData[language];
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="mission" className={styles.section}>
      <div className="section-container" ref={ref}>
        <div className={styles.card}>
          <div className={styles.leftAccent} />
          <div className={styles.iconWrap}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              <path d="M2 12h20" />
            </svg>
          </div>
          <h2 className={styles.title}>{data.title}</h2>
          <p className={styles.description}>{data.description}</p>
          <div className={styles.dots}>
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span className={styles.dot} />
          </div>
        </div>
      </div>
    </section>
  );
}
