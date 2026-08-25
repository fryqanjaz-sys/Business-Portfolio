import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useScrollReveal, useStaggerReveal } from '../../hooks/useScrollReveal';
import styles from './Services.module.css';

const serviceData = {
  ar: {
    title: 'خدماتنا',
    subtitle: 'الضيافة والتوثيق',
    more: 'عرض المزيد',
    less: 'عرض أقل',
    items: [
      { title: 'الضيافة والترفيه', description: 'نضيف لمناسبتك لمسات الضيافة السعودية وتجارب ترفيهية متكاملة.', details: ['تقديم الضيافة العربية وخدمات القهوجية.', 'تنظيم فقرات الزفة والفرق الشعبية.', 'تأجير الجلسات والكراسي والطاولات عند الحاجة.'] },
      { title: 'التوثيق والإعلام', description: 'نوثق تفاصيل مناسبتك ونتائجها بصور ومواد احترافية تحفظ أجمل اللحظات.', details: ['تصوير وتوثيق كواليس الحفل.', 'إنتاج صور احترافية للتفاصيل والنتائج النهائية.'] },
      { title: 'التخطيط والتصميم الأولي', description: 'نحوّل الفكرة إلى خطة واضحة وتصوّر بصري متكامل قبل التنفيذ.', details: ['تصميم خطة الحفل والمودبورد.', 'تصميم الدعوات الإلكترونية.', 'إعداد العروض الفنية وتنسيق عقود الموردين.'] },
      { title: 'الديكور والتنسيق الميداني', description: 'ننسق المكان ليعكس هوية المناسبة ويمنح الضيوف تجربة متناسقة.', details: ['تنسيق الهياكل والخلفيات والكوشة.', 'تنسيق الورود والبالونات.', 'تجهيز الجلسات وطاولات الاستقبال والمداخل.'] },
      { title: 'الإضاءة والصوت والمؤثرات', description: 'نجهز الحلول التقنية المناسبة للمكان ونضبط تفاصيلها أثناء الفعالية.', details: ['تجهيز الإضاءة الديكورية والموجهة.', 'توفير وتشغيل الأنظمة الصوتية المناسبة.', 'إضافة المؤثرات الخاصة مثل البخار وإضاءات الزفة.'] },
      { title: 'الإشراف وإدارة يوم الحفل', description: 'يتابع فريقنا الميداني كل التفاصيل لضمان سير الحفل بسلاسة وإتقان.', details: ['تواجد فريق ميداني للمتابعة خطوة بخطوة.', 'إدارة الموردين والجدول الزمني للفعالية.', 'التعامل مع الطوارئ الميدانية بسرعة واحترافية.'] },
    ],
  },
  en: {
    title: 'Our Services',
    subtitle: 'Hospitality & Documentation',
    more: 'Show more',
    less: 'Show less',
    items: [
      { title: 'Hospitality & Entertainment', description: 'We add Saudi hospitality and engaging entertainment experiences to your occasion.', details: ['Arabic hospitality and coffee service.', 'Entrance ceremonies and traditional performances.', 'Seating, chair, and table rentals when needed.'] },
      { title: 'Documentation & Media', description: 'We preserve your event highlights through professional photography and media.', details: ['Behind-the-scenes event documentation.', 'Professional photography of the details and final result.'] },
      { title: 'Planning & Initial Design', description: 'We turn the initial idea into a clear plan and complete visual direction.', details: ['Event plan and moodboard design.', 'Custom electronic invitations.', 'Art direction and supplier contract coordination.'] },
      { title: 'Decor & On-site Coordination', description: 'We coordinate the venue to reflect the occasion and create a consistent guest experience.', details: ['Structures, backdrops, and stage design.', 'Floral and balloon arrangements.', 'Guest seating, reception tables, and entrance setup.'] },
      { title: 'Lighting, Sound & Effects', description: 'We prepare and operate the technical solutions suited to the venue and event.', details: ['Decorative and focused lighting setup.', 'Sound systems suited to the venue.', 'Special effects such as haze and entrance lighting.'] },
      { title: 'On-day Management', description: 'Our field team follows every detail to keep the event smooth and well-executed.', details: ['A field team present throughout the event.', 'Supplier and event schedule management.', 'Fast, professional handling of on-site emergencies.'] },
    ],
  },
};

const serviceIcons = [
  <svg key="hospitality" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 10h16v9H4z" /><path d="M7 10V7a5 5 0 0 1 10 0v3M2 19h20M8 22h8" /></svg>,
  <svg key="media" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m3 7 4-3h10l4 3v13H3z" /><circle cx="12" cy="13" r="4" /><path d="M9 4.5 10 7h4l1-2.5" /></svg>,
  <svg key="planning" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 5h16v15H4z" /><path d="M8 3v4M16 3v4M4 10h16M8 14h.01M12 14h.01M16 14h.01M8 17h.01M12 17h.01" /></svg>,
  <svg key="decor" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3v18M5 8h14M7 21h10" /><path d="M5 8c0 4 2 6 7 6s7-2 7-6" /></svg>,
  <svg key="technical" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3v18M3 12h18" /><circle cx="12" cy="12" r="8" /><path d="m5.5 5.5 13 13M18.5 5.5l-13 13" /></svg>,
  <svg key="management" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="m8 12 3 3 5-6" /></svg>,
];

export default function Services() {
  const { language } = useLanguage();
  const data = serviceData[language];
  const [showAll, setShowAll] = useState(false);
  const titleRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useStaggerReveal<HTMLDivElement>();

  return (
    <section id="services" className={styles.section}>
      <div className="section-container">
        <div className={styles.header} ref={titleRef}>
          <span className="section-label">{data.title}</span>
          <h2 className="section-title">{data.subtitle}</h2>
        </div>
        <div className={styles.grid} ref={gridRef}>
          {data.items.slice(0, showAll ? data.items.length : 2).map((item, index) => (
            <article key={item.title} className={`${styles.card} stagger-item`}>
              <div className={styles.iconWrap}>{serviceIcons[index]}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
              <div className={styles.details}>
                <ul>
                  {item.details.map((detail) => <li key={detail}>{detail}</li>)}
                </ul>
              </div>
              <div className={styles.cardLine} />
            </article>
          ))}
        </div>
        <button type="button" className={styles.moreButton} onClick={() => setShowAll((value) => !value)}>
          {showAll ? data.less : data.more}
          <span aria-hidden="true">{showAll ? '−' : '+'}</span>
        </button>
      </div>
    </section>
  );
}