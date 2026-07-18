import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import logoImg from '../../assets/images/logo2.svg';
import styles from './Navbar.module.css';

const navLinks = {
  ar: [
    { id: 'hero', label: 'الرئيسية' },
    { id: 'vision-mission', label: 'رؤيتنا ورسالتنا' },
    { id: 'portfolio', label: 'أعمالنا' },
    { id: 'team', label: 'فريق العمل' },
    { id: 'goals', label: 'أهدافنا' },
    { id: 'values', label: 'قيمنا' },
  ],
  en: [
    { id: 'hero', label: 'Home' },
    { id: 'vision-mission', label: 'Vision & Mission' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'team', label: 'Team' },
    { id: 'goals', label: 'Goals' },
    { id: 'values', label: 'Values' },
  ],
};

export default function Navbar() {
  const { language, toggleLanguage, dir } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const links = navLinks[language];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = links.map((l) => document.getElementById(l.id));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-80px 0px -40% 0px' }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [links]);

  const handleNavClick = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`section-container ${styles.navContainer}`}>
        <a
          href="#hero"
          className={styles.logo}
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('hero');
          }}
        >
          <img src={logoImg} alt="Injaz" className={styles.logoImg} />
        </a>

        <ul className={`${styles.navLinks} ${mobileOpen ? styles.open : ''}`}>
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`${styles.navLink} ${activeSection === link.id ? styles.active : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.id);
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <button
            className={styles.langToggle}
            onClick={toggleLanguage}
            aria-label="Toggle language"
          >
            {language === 'ar' ? 'EN' : 'ع'}
          </button>

          <button
            className={`${styles.burger} ${mobileOpen ? styles.burgerOpen : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          className={styles.overlay}
          onClick={() => setMobileOpen(false)}
        />
      )}
    </nav>
  );
}
