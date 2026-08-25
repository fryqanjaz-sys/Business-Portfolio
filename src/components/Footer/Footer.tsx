import { useLanguage } from '../../context/LanguageContext';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import logoImg from '../../assets/images/logo6.png';
import styles from './Footer.module.css';

const footerData = {
  ar: {
    description: 'نسعى لأن نكون الخيار الأول في استثمار طاقات الشباب وأوقاتهم، وتنمية مهاراتهم الرقمية والفنية والمهنية، بما يسهم في بناء جيل متمكن ومؤثر.',
    quickLinks: 'روابط سريعة',
    contact: 'تواصل معنا',
    newsletterPlaceholder: 'أدخل بريدك الإلكتروني',
    subscribe: 'اشترك',
    links: [
      { label: 'الرئيسية', href: '#hero' },
      { label: 'رؤيتنا ورسالتنا', href: '#vision-mission' },
      { label: 'أعمالنا', href: '#portfolio' },
      { label: 'فريق العمل', href: '#team' },
    ],
    address: 'مكة المكرمة، المملكة العربية السعودية',
    phone: '1667 521 55 966+',
    email: 'fryqanjaz@gmail.com',
    copyright: ' © 2026 فريق إنجاز. جميع الحقوق محفوظة.',
  },
  en: {
    description: 'We strive to be the first choice in investing in youth energies and time, and developing their digital, artistic, and professional skills, contributing to building an empowered and influential generation.',
    quickLinks: 'Quick Links',
    contact: 'Contact Us',
    newsletter: 'Newsletter',
    newsletterPlaceholder: 'Enter your email',
    subscribe: 'Subscribe',
    links: [
      { label: 'Home', href: '#hero' },
      { label: 'Vision & Mission', href: '#vision-mission' },
      { label: 'Portfolio', href: '#portfolio' },
      { label: 'Team', href: '#team' },
    ],
    address: 'Makkah Al-Mukarramah, Saudi Arabia',
    phone: '+966 55 521 1667',
    email: 'fryqanjaz@gmail.com',
    copyright: '© 2026 Injaz. All rights reserved.',
  },
};

export default function Footer() {
  const { language } = useLanguage();
  const data = footerData[language];
  const ref = useScrollReveal<HTMLDivElement>();

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className="section-container" ref={ref}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <img src={logoImg} alt="Injaz" className={styles.logo} />
            <p className={styles.brandDesc}>{data.description}</p>
            <div className={styles.socials}>
              {/* <a href="#" className={styles.socialLink} aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
              <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
              <a href="#" className={styles.socialLink} aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" /></svg>
              </a> */}
            </div>
          </div>

          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>{data.quickLinks}</h4>
            <ul className={styles.links}>
              {data.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={styles.footerLink}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.href);
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>{data.contact}</h4>
            <ul className={styles.links}>
              <li className={styles.contactItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                {data.address}
              </li>
              <li className={styles.contactItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                {data.phone}
              </li>
              <li className={styles.contactItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                {data.email}
              </li>
            </ul>
          </div>

          <div className={styles.newsletterCol}>
            <div className={styles.newsletterForm}>
              <input
                type="email"
                placeholder={data.newsletterPlaceholder}
                className={styles.emailInput}
              />
              <button className={styles.subscribeBtn}>{data.subscribe}</button>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>{data.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
