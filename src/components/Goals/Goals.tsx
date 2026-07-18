import { useLanguage } from '../../context/LanguageContext';
import { useScrollReveal, useStaggerReveal } from '../../hooks/useScrollReveal';
import goalsData from '../../../data/goals';
import type { GoalItem } from '../../types';
import styles from './Goals.module.css';

const sectionText = {
  ar: { title: 'أهدافنا', subtitle: 'نحوّل الطموح إلى أهداف واضحة وقابلة للتحقيق' },
  en: { title: 'Our Goals', subtitle: 'We transform ambition into clear and achievable goals' },
};

const goalIcons = [
  <svg key="1" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" /></svg>,
  <svg key="2" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
  <svg key="3" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-4" /></svg>,
  <svg key="4" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>,
  <svg key="5" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><line x1="19" y1="8" x2="19" y2="14" /><line x1="22" y1="11" x2="16" y2="11" /></svg>,
  <svg key="6" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>,
];

export default function Goals() {
  const { language } = useLanguage();
  const data = goalsData[language];
  const text = sectionText[language];
  const titleRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useStaggerReveal<HTMLDivElement>();

  return (
    <section id="goals" className={styles.section}>
      <div className="section-container">
        <div className={styles.header} ref={titleRef}>
          <span className="section-label">{text.title}</span>
          <h2 className="section-title">{text.subtitle}</h2>
        </div>

        <div className={styles.grid} ref={gridRef}>
          {data.map((item: GoalItem, index: number) => (
            <div key={item.id} className={`${styles.card} stagger-item`}>
              <div className={styles.timelineDot}>
                <span className={styles.dotNumber}>{String(index + 1).padStart(2, '0')}</span>
              </div>
              <div className={styles.iconWrap}>
                {goalIcons[index]}
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
