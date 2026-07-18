import { useLanguage } from '../../context/LanguageContext';
import { useScrollReveal, useStaggerReveal } from '../../hooks/useScrollReveal';
import teamData from '../../../data/team';
import type { TeamMember } from '../../types';
import styles from './Team.module.css';

const sectionText = {
  ar: { title: 'فريق العمل', subtitle: 'تعرف على الفريق المتميز الذي يقود رحلة النجاح' },
  en: { title: 'Our Team', subtitle: 'Meet the distinguished team that leads our journey to success' },
};

export default function Team() {
  const { language } = useLanguage();
  const data = teamData[language];
  const text = sectionText[language];
  const titleRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useStaggerReveal<HTMLDivElement>();

  return (
    <section id="team" className={styles.section}>
      <div className="section-container">
        <div className={styles.header} ref={titleRef}>
          <span className="section-label">{text.title}</span>
          <h2 className="section-title">{text.subtitle}</h2>
        </div>

        <div className={styles.grid} ref={gridRef}>
          {data.map((member: TeamMember) => (
            <div key={member.id} className={`${styles.card} stagger-item`}>
              <div className={styles.avatar}>
                <img
                  src={member.image}
                  alt={member.name}
                  className={styles.avatarImg}
                  loading="lazy"
                />
                <div className={styles.avatarRing} />
              </div>

              <h3 className={styles.name}>{member.name}</h3>
              <span className={styles.role}>{member.role}</span>
              <p className={styles.bio}>{member.bio}</p>

              <div className={styles.social}>
                <a href={member.social.linkedin} className={styles.socialLink} aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href={member.social.twitter} className={styles.socialLink} aria-label="Twitter">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href={`mailto:${member.social.email}`} className={styles.socialLink} aria-label="Email">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
