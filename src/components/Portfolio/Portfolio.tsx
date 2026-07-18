import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useScrollReveal, useStaggerReveal } from '../../hooks/useScrollReveal';
import portfolioData from '../../../data/portfolio';
import type { PortfolioItem } from '../../types';
import styles from './Portfolio.module.css';

const sectionText = {
  ar: { title: 'أعمالنا', subtitle: 'استكشف أحدث المشاريع التي نفتخر بها', prev: '→', next: '←' },
  en: { title: 'Our Portfolio', subtitle: 'Explore our latest projects that we are proud of', prev: '←', next: '→' },
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
      {hasMultiple && (
        <>
          <button className={`${styles.carouselBtn} ${styles.carouselPrev}`} onClick={goPrev}>
            {text.prev}
          </button>
          <button className={`${styles.carouselBtn} ${styles.carouselNext}`} onClick={goNext}>
            {text.next}
          </button>
          <div className={styles.dots}>
            {images.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
                onClick={() => goTo(i)}
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
            <div key={item.id} className={`${styles.card} stagger-item`}>
              <ImageCarousel images={item.images} title={item.title} />
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
