import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SampleCarousel = ({ images = [], label = '' }) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef(null);

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrent(prev => (prev + 1) % images.length);
    }, 3500);
  };

  useEffect(() => {
    if (images.length > 1) startTimer();
    return () => clearInterval(timerRef.current);
  }, [images.length]);

  const goTo = (idx) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
    startTimer();
  };

  const prev = () => {
    setDirection(-1);
    setCurrent(prev => (prev - 1 + images.length) % images.length);
    startTimer();
  };

  const next = () => {
    setDirection(1);
    setCurrent(prev => (prev + 1) % images.length);
    startTimer();
  };

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0, scale: 0.92 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0, scale: 0.92 }),
  };

  if (!images.length) return null;

  return (
    <div className="carousel-wrapper">
      {/* Label badge */}
      {label && <div className="carousel-label">{label}</div>}

      {/* Main slide area */}
      <div className="carousel-track">
        <AnimatePresence custom={direction} mode="popLayout">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="carousel-slide"
          >
            <img
              src={images[current].src}
              alt={images[current].alt || `Sample ${current + 1}`}
              className="carousel-img"
            />
            {/* Subtle gloss overlay */}
            <div className="carousel-gloss" />
          </motion.div>
        </AnimatePresence>

        {/* Prev / Next buttons */}
        <button className="carousel-btn carousel-btn-prev" onClick={prev} aria-label="Previous">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button className="carousel-btn carousel-btn-next" onClick={next} aria-label="Next">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        {/* Counter */}
        <div className="carousel-counter">{current + 1} / {images.length}</div>
      </div>

      {/* Dot indicators */}
      <div className="carousel-dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`carousel-dot ${i === current ? 'active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SampleCarousel;
