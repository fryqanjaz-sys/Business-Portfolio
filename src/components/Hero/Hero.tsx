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
    { icon: '💡', label: 'إبداع' },
    { icon: '⚡', label: 'شغف' },
    { icon: '🎯', label: 'دقة' },
    { icon: '🚀', label: 'إنجاز' },
  ],
  en: [
    { icon: '💡', label: 'Creativity' },
    { icon: '⚡', label: 'Passion' },
    { icon: '🎯', label: 'Precision' },
    { icon: '🚀', label: 'Injaz' },
  ],
};

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
                <span className={styles.chipIcon}>{item.icon}</span>
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
