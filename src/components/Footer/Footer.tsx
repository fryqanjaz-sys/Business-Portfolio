import { useLanguage } from '../../context/LanguageContext';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import logoImg from '../../assets/images/logo6.png';
import styles from './Footer.module.css';

const footerData = {
  ar: {
    description: 'نقدّم خدمات ضيافة وتنظيم فعاليات بجودة عالية واهتمام بالتفاصيل، لنترك أثرًا موثوقًا يعكس كرم الضيافة السعودية.',
    quickLinks: 'روابط سريعة',
    contact: 'تواصل معنا',
    links: [
      { label: 'الرئيسية', href: '#hero' },
      { label: 'رؤيتنا ورسالتنا', href: '#vision-mission' },
      { label: 'خدماتنا', href: '#services' },
      { label: 'أعمالنا', href: '#portfolio' },
    ],
    address: 'مكة المكرمة، المملكة العربية السعودية',
    phone: '+966 55 821 8662',
    email: 'fryqanjaz@gmail.com',
    copyright: ' © 2026 فريق إنجاز. جميع الحقوق محفوظة.',
  },
  en: {
    description: 'We deliver high-quality hospitality and event management services with genuine attention to detail, building a trusted reputation that reflects the spirit of Saudi generosity.',
    quickLinks: 'Quick Links',
    contact: 'Contact Us',
    links: [
      { label: 'Home', href: '#hero' },
      { label: 'Vision & Mission', href: '#vision-mission' },
      { label: 'Our Services', href: '#services' },
      { label: 'Portfolio', href: '#portfolio' },
    ],
    address: 'Makkah Al-Mukarramah, Saudi Arabia',
    phone: '+966 55 821 8662',
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
              <a href="https://www.instagram.com/fryqanjaz" className={styles.socialLink} aria-label="Instagram" target="_blank" rel="noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" /></svg>
              </a>
              <a href="https://x.com/fryqanjaz" className={styles.socialLink} aria-label="X" target="_blank" rel="noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
              <a href="https://www.snapchat.com/add/fryqanjaz" className={styles.socialLink} aria-label="Snapchat" target="_blank" rel="noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.089-1.272.149-.211.043-.391.074-.54.074-.374 0-.523-.224-.583-.42-.061-.192-.09-.389-.135-.567-.046-.181-.105-.494-.166-.57-1.918-.222-2.95-.642-3.189-1.226-.031-.063-.052-.15-.055-.225-.015-.243.165-.465.42-.509 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-1.107-.435-1.257-.93-1.197-1.273.09-.479.674-.793 1.168-.793.146 0 .27.029.383.074.42.194.789.3 1.104.3.234 0 .384-.06.465-.105l-.046-.569c-.098-1.626-.225-3.651.307-4.837C7.392 1.077 10.739.807 11.727.807l.419-.015h.06z"/></svg>
              </a>
              <a href="https://wa.me/966558218662" className={styles.socialLink} aria-label="WhatsApp" target="_blank" rel="noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 11.5a8 8 0 0 1-11.8 7.1L4 20l1.4-4.1A8 8 0 1 1 20 11.5Z" /><path d="M8.5 8.5c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.6 1.4c.1.2 0 .4-.1.6l-.5.6c.6 1.1 1.5 2 2.6 2.6l.6-.5c.2-.2.4-.2.6-.1l1.4.6c.3.1.4.3.4.5v.5c0 .3 0 .5-.4.7-.4.2-1.4.3-2.7-.3-1.3-.6-2.4-1.5-3.3-2.4-.9-.9-1.8-2-2.4-3.3-.6-1.3-.5-2.3-.3-2.7Z" /></svg>
              </a>
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
                <a
                  href="https://maps.app.goo.gl/My8hV5yQhSBYaxRc6"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.footerLink}
                >
                  {data.address}
                </a>
              </li>
              <li className={styles.contactItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                <a href="tel:+966558218662" className={styles.footerLink}>{data.phone}</a>
              </li>
              <li className={styles.contactItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                <a href={`mailto:${data.email}`} className={styles.footerLink}>{data.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>{data.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
