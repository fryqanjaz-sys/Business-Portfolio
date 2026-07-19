import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useScrollReveal, useStaggerReveal } from '../../hooks/useScrollReveal';
import portfolioData from '../../../data/portfolio';
import type { PortfolioItem } from '../../types';
import styles from './Portfolio.module.css';

const sectionText = {
  ar: { title: 'أعمالنا', subtitle: 'استكشف أحدث المشاريع التي نفتخر بها', prev: '→', next: '←', more: 'اقرأ المزيد', less: 'عرض أقل' },
  en: { title: 'Our Portfolio', subtitle: 'Explore our latest projects that we are proud of', prev: '←', next: '→', more: 'Read more', less: 'Show less' },
};

function ImageCarousel({ images, title }: { images: string[]; title: string }) {
  const [current, setCurrent] = useState(0);
  const { language } = useLanguage();
  const text = sectionText[language];
  const hasMultiple = images.length > 1;

  const goTo = (index: number) => {
    setCurrent(index);
  };

  const goPrev = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={styles.carousel}>
      <img
        src={images[current]}
        alt={title}
        className={styles.cardImg}
        loading="lazy"
      />
      <div className={styles.carouselOverlay} />
      {hasMultiple && (
        <>
          <button
            type="button"
            className={`${styles.carouselBtn} ${styles.carouselPrev}`}
            onClick={goPrev}
            aria-label="Previous image"
          >
            {text.prev}
          </button>
          <button
            type="button"
            className={`${styles.carouselBtn} ${styles.carouselNext}`}
            onClick={goNext}
            aria-label="Next image"
          >
            {text.next}
          </button>
          <div className={styles.dots}>
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Image ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

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
          <span className="section-label">{text.title}</span>
          <h2 className="section-title">{text.subtitle}</h2>
        </div>

        <div className={styles.grid} ref={gridRef}>
          {data.map((item) => (
            <PortfolioCard key={item.id} item={item} text={text} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioCard({
  item,
  text,
}: {
  item: PortfolioItem;
  text: { more: string; less: string };
}) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className={`${styles.card} stagger-item`}>
      <ImageCarousel images={item.images} title={item.title} />
      <div className={styles.cardBody}>
        {item.category && <span className={styles.category}>{item.category}</span>}
        <h3 className={styles.cardTitle}>{item.title}</h3>
        <p className={`${styles.cardDesc} ${expanded ? styles.cardDescExpanded : ''}`}>
          {item.description}
        </p>
        <button
          type="button"
          className={styles.readMore}
          onClick={() => setExpanded((v) => !v)}
        >
          {expanded ? text.less : text.more}
        </button>
      </div>
    </div>
  );
}
