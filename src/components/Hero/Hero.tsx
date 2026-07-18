import { useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './Hero.module.css';

const heroData = {
  ar: {
    title: 'نحوّل الأفكار إلى',
    highlight: 'واقع رقمي متميز',
    description: 'فريق إنجاز — مجموعة من المبدعين والمطورين بشغف واحد: بناء تجارب رقمية استثنائية تترك أثراً.',
    cta1: 'استكشف أعمالنا',
    cta2: 'تعرف علينا',
  },
  en: {
    title: 'We Turn Ideas Into',
    highlight: 'Exceptional Digital Reality',
    description: 'Team Injaz — a group of creatives and developers with one passion: building exceptional digital experiences that leave a mark.',
    cta1: 'Explore Our Work',
    cta2: 'About Us',
  },
};

export default function Hero() {
  const { language } = useLanguage();
  const data = heroData[language];
  const heroRef = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
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
    <section id="hero" className={styles.hero}>
      <div className={styles.bgElements}>
        <div className={`${styles.circle} ${styles.circle1}`} />
        <div className={`${styles.circle} ${styles.circle2}`} />
        <div className={`${styles.circle} ${styles.circle3}`} />
        <div className={styles.gridPattern} />
      </div>

      <div className={`section-container ${styles.content}`} ref={heroRef}>
        <div className={`${styles.textContent} ${mounted ? styles.mounted : ''}`}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            {language === 'ar' ? 'فريق إنجاز' : 'Team Injaz'}
          </div>

          <h1 className={styles.title}>
            {data.title}
            <br />
            <span className={styles.highlight}>{data.highlight}</span>
          </h1>

          <p className={styles.description}>{data.description}</p>

          <div className={styles.ctaGroup}>
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

          <div className={styles.stats}>
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
              <span className={styles.statLabel}>{language === 'ar' ? 'سنوات خبرة' : 'Years Experience'}</span>
            </div>
          </div>
        </div>

        <div className={`${styles.heroVisual} ${mounted ? styles.mounted : ''}`}>
          <div className={styles.visualContainer}>
            <div className={styles.floatingCard} style={{ animationDelay: '0s' }}>
              <div className={styles.floatingIcon}>💡</div>
              <span>{language === 'ar' ? 'إبداع' : 'Creativity'}</span>
            </div>
            <div className={styles.floatingCard} style={{ animationDelay: '1.5s' }}>
              <div className={styles.floatingIcon}>⚡</div>
              <span>{language === 'ar' ? 'شغف' : 'Passion'}</span>
            </div>
            <div className={styles.floatingCard} style={{ animationDelay: '3s' }}>
              <div className={styles.floatingIcon}>🎯</div>
              <span>{language === 'ar' ? 'دقة' : 'Precision'}</span>
            </div>
            <div className={styles.centerOrb}>
              <div className={styles.orbInner} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollDot} />
        </div>
      </div>
    </section>
  );
}
