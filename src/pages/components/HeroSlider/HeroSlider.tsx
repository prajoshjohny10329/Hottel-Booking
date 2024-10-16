import React, { useState, useEffect, useRef } from 'react';
import styles from './HeroSlider.module.css'; // Import your custom CSS module
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
}

const slides: Slide[] = [
  { id: 1, title: 'Welcome to Your Dream Stay', description: 'Experience luxury and comfort at our hotel.', image: '/images/slider/1.jpg' },
  { id: 2, title: 'Unforgettable Experiences', description: 'Enjoy amazing amenities and services tailored just for you.', image: '/images/slider/2.jpg' },
  { id: 3, title: 'Relax and Rejuvenate', description: 'Take a break and indulge in our wellness facilities.', image: '/images/slider/3.jpg' },
];

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef<NodeJS.Timeout | null>(null);
  const startPos = useRef<number>(0);
  const endPos = useRef<number>(0);

  useEffect(() => {
    startSlideInterval();
    return () => stopSlideInterval();
  }, [currentSlide]);

  const startSlideInterval = () => {
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Auto-slide every 5 seconds
  };

  const stopSlideInterval = () => {
    if (slideInterval.current) clearInterval(slideInterval.current);
  };

  const goToPrevious = () => {
    stopSlideInterval();
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
    startSlideInterval();
  };

  const goToNext = () => {
    stopSlideInterval();
    setCurrentSlide((currentSlide + 1) % slides.length);
    startSlideInterval();
  };

  const handleMouseDown = (event: React.MouseEvent) => {
    startPos.current = event.clientX;
    stopSlideInterval(); // Stop auto-slide when user interacts
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (startPos.current) {
      endPos.current = event.clientX;
    }
  };

  const handleMouseUp = () => {
    if (startPos.current && endPos.current) {
      if (startPos.current - endPos.current > 50) {
        goToNext(); // Swipe left - Next slide
      } else if (endPos.current - startPos.current > 50) {
        goToPrevious(); // Swipe right - Previous slide
      }
    }
    startPos.current = 0;
    endPos.current = 0;
    startSlideInterval(); // Resume auto-slide
  };

  return (
    <div className={styles.sliderContainer}>
      <div
        className={styles.slides}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className={styles.slide} style={{ backgroundImage: `url(${slide.image})` }}>
            <div className={styles.overlay}></div>
            <div className={styles.content}>
              <h1 className={styles.title}>{slide.title}</h1>
              <p className={styles.description}>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button className={styles.prevButton} onClick={goToPrevious}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button className={styles.nextButton} onClick={goToNext}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default HeroSlider;
