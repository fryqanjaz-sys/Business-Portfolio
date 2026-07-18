import { useLanguage } from '../../context/LanguageContext';
import { useScrollReveal, useStaggerReveal } from '../../hooks/useScrollReveal';
import teamData from '../../../data/team';
import type { TeamMember } from '../../types';
import { FaWhatsapp, FaSnapchatGhost, FaEnvelope } from 'react-icons/fa';
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
                <a
                  href={member.social.whatsapp}
                  className={`${styles.socialLink} ${styles.whatsapp}`}
                  aria-label="WhatsApp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp size={18} />
                </a>
                <a
                  href={member.social.snapchat}
                  className={`${styles.socialLink} ${styles.snapchat}`}
                  aria-label="Snapchat"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaSnapchatGhost size={18} />
                </a>
                <a
                  href={`mailto:${member.social.email}`}
                  className={`${styles.socialLink} ${styles.email}`}
                  aria-label="Email"
                >
                  <FaEnvelope size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
