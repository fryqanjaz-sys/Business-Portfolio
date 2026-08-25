import { useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Hero.module.css';

const heroData = {
  ar: {
    title: 'شعارنا',
    highlight: 'الإنجاز طريق النجاح.',
    description: 'فريق إنجاز — عقول مبدعة يجمعها شغف واحد.',
    cta1: 'استكشف أعمالنا',
    cta2: 'تعرف علينا',
  },
  en: {
    title: 'Our Slogan',
    highlight: 'Achievement is the path to success.',
    description: 'Team Injaz — creative minds united by one passion.',
    cta1: 'Explore Our Work',
    cta2: 'About Us',
  },
};

const values = {
  ar: [
    { label: 'إبداع' },
    { label: 'شغف' },
    { label: 'دقة' },
    { label: 'إنجاز' },
  ],
  en: [
    { label: 'Creativity' },
    { label: 'Passion' },
    { label: 'Precision' },
    { label: 'Injaz' },
  ],
};

const valueIcons = [
  <svg key="creativity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
    <path d="M9 18h6" />
    <path d="M10 22h4" />
    <path d="M8.5 14.5A6 6 0 1 1 15.5 15c-.9.7-1.5 1.7-1.5 3h-4c0-1.3-.6-2.3-1.5-3.5Z" />
    <path d="M12 2v1M4.93 4.93l.7.7M2 12h1M19.07 4.93l-.7.7M21 12h-1" />
  </svg>,
  <svg key="passion" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M13.5 2.5c.4 3.1-1.8 4.6-3.3 6.5-1.1 1.4-1.2 3.1-.2 4.5.3-2 1.8-3.2 3.2-4.2-.1 2.1 2.3 3 2.3 5.6 0 1.3-.5 2.5-1.4 3.4 3.1-.8 5.4-3.6 5.4-6.9 0-3.5-2.4-6.9-6-8.9Z" />
    <path d="M10.5 20.5a5.1 5.1 0 0 1-3.2-4.7c0-1.7.8-3.2 2.2-4.4" />
  </svg>,
  <svg key="precision" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="8.5" />
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v2.5M12 20.5V23M1 12h2.5M20.5 12H23" />
  </svg>,
  <svg key="achievement" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 10.5 12 2l7 8.5" />
    <path d="M5 10.5h14L17 22H7L5 10.5Z" />
    <path d="M9 14.5h6M10 18h4" />
  </svg>,
];

export default function Hero() {
  const { language } = useLanguage();
  const data = heroData[language];
  const items = values[language];
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className={`${styles.hero} ${mounted ? styles.mounted : ''}`}>
      <div className={styles.bgGradient} />

      <div className="section-container">
        <div className={styles.inner}>
          <div className={styles.textContent}>
            <div className={`${styles.badge} ${styles.reveal}`} style={{ transitionDelay: '0.1s' }}>
              <span className={styles.badgeDot} />
              {language === 'ar' ? 'فريق إنجاز' : 'Team Injaz'}
            </div>

            <h1 className={`${styles.title} ${styles.reveal}`} style={{ transitionDelay: '0.2s' }}>
              {data.title}
              <br />
              <span className={styles.highlight}>{data.highlight}</span>
            </h1>

            <p className={`${styles.description} ${styles.reveal}`} style={{ transitionDelay: '0.35s' }}>
              {data.description}
            </p>

            <div className={`${styles.ctaGroup} ${styles.reveal}`} style={{ transitionDelay: '0.5s' }}>
              <button
                className={`${styles.btn} ${styles.btnPrimary}`}
                onClick={() => scrollToSection('portfolio')}
              >
                {data.cta1}
                <span className={styles.btnArrow}>
                  {language === 'ar' ? '←' : '→'}
                </span>
              </button>
              <button
                className={`${styles.btn} ${styles.btnSecondary}`}
                onClick={() => scrollToSection('team')}
              >
                {data.cta2}
              </button>
            </div>

            <div className={`${styles.stats} ${styles.reveal}`} style={{ transitionDelay: '0.65s' }}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>+50</span>
                <span className={styles.statLabel}>{language === 'ar' ? 'مشروع' : 'Projects'}</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.statItem}>
                <span className={styles.statNumber}>+30</span>
                <span className={styles.statLabel}>{language === 'ar' ? 'عميل' : 'Clients'}</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.statItem}>
                <span className={styles.statNumber}>+10</span>
                <span className={styles.statLabel}>{language === 'ar' ? 'سنوات خبرة' : 'Years'}</span>
              </div>
            </div>
          </div>

          <div className={`${styles.visual} ${styles.reveal}`} style={{ transitionDelay: '0.4s' }}>
            <div className={styles.visualRing} />
            <div className={styles.visualOrb}>
              <div className={styles.orbGlow} />
              <span className={styles.orbText}>{language === 'ar' ? 'فريق إنجاز' : 'Team Injaz'}</span>
            </div>
            {items.map((item, index) => (
              <div
                key={index}
                className={styles.chip}
                style={{ ['--i' as string]: index }}
              >
                <span className={styles.chipIcon}>{valueIcons[index]}</span>
                <span className={styles.chipLabel}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button className={styles.scrollBtn} onClick={() => scrollToSection('portfolio')} aria-label="Scroll down">
        <span className={styles.scrollDot} />
      </button>
    </section>
  );
}
