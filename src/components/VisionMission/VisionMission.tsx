import { useLanguage } from '../../context/LanguageContext';
import { useScrollReveal, useStaggerReveal } from '../../hooks/useScrollReveal';
import visionData from '../../../data/vision';
import missionData from '../../../data/mission';
import styles from './VisionMission.module.css';

const sectionText = {
  ar: { title: 'رؤيتنا ورسالتنا', subtitle: 'الرسالة والرؤية التي تدفعنا نحو التميز' },
  en: { title: 'Vision & Mission', subtitle: 'The message and vision that drive us toward excellence' },
};

export default function VisionMission() {
  const { language } = useLanguage();
  const vision = visionData[language];
  const mission = missionData[language];
  const text = sectionText[language];
  const titleRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useStaggerReveal<HTMLDivElement>();

  return (
    <section id="vision-mission" className={styles.section}>
      <div className="section-container">
        <div className={styles.header} ref={titleRef}>
          <span className="section-label">{text.title}</span>
          <h2 className="section-title">{text.subtitle}</h2>
        </div>

        <div className={styles.grid} ref={gridRef}>
          <div className={`${styles.card} stagger-item`}>
            <div className={`${styles.iconWrap} ${styles.iconVision}`}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>{vision.title}</h3>
            <p className={styles.cardDesc}>{vision.description}</p>
            <div className={styles.accentLine} />
          </div>

          <div className={`${styles.card} stagger-item`}>
            <div className={`${styles.iconWrap} ${styles.iconMission}`}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                <path d="M2 12h20" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>{mission.title}</h3>
            <p className={styles.cardDesc}>{mission.description}</p>
            <div className={styles.accentLine} />
          </div>
        </div>
      </div>
    </section>
  );
}
