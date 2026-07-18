import { useLanguage } from '../../context/LanguageContext';
import { useScrollReveal, useStaggerReveal } from '../../hooks/useScrollReveal';
import portfolioData from '../../../data/portfolio';
import type { PortfolioItem } from '../../types';
import styles from './Portfolio.module.css';

const sectionText = {
  ar: { title: 'أعمالنا', subtitle: 'استكشف أحدث المشاريع التي نفتخر بها' },
  en: { title: 'Our Portfolio', subtitle: 'Explore our latest projects that we are proud of' },
};

export default function Portfolio() {
  const { language } = useLanguage();
  const data: PortfolioItem[] = portfolioData[language];
  const text = sectionText[language];
  const titleRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useStaggerReveal<HTMLDivElement>();

  return (
    <section id="portfolio" className={styles.section}>
      <div className="section-container">
        <div className={styles.header} ref={titleRef}>
          <span className={styles.sectionLabel}>{text.title}</span>
          <h2 className={styles.sectionTitle}>{text.subtitle}</h2>
        </div>

        <div className={styles.grid} ref={gridRef}>
          {data.map((item) => (
            <div key={item.id} className={`${styles.card} stagger-item`}>
              <div className={styles.cardImage}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={styles.cardImg}
                  loading="lazy"
                />
                <div className={styles.cardOverlay}>
                  <button className={styles.viewBtn}>
                    {language === 'ar' ? 'عرض التفاصيل' : 'View Details'}
                    <span>{language === 'ar' ? '←' : '→'}</span>
                  </button>
                </div>
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
