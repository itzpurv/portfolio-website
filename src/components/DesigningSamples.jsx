import React from 'react';
import { motion } from 'framer-motion';
import headImg from '../assets/designing-head.png';
import shineImg from '../assets/shine-logo.png';
import SampleCarousel from './SampleCarousel';

import img1 from '../assets/design1.jpg';
import img2 from '../assets/design2.jpg';
import img3 from '../assets/design3.jpg';
import img4 from '../assets/design4.jpg';
import img5 from '../assets/design5.jpg';

// 👇 ADD YOUR 5 DESIGNING SAMPLE IMAGES HERE
const designImages = [
  { src: img1, alt: 'Dragon Artwork' },
  { src: img2, alt: 'Minecraft Context Screen' },
  { src: img3, alt: 'Deity Aura Edit' },
  { src: img4, alt: 'Cosmic Trippy Street' },
  { src: img5, alt: 'Spotify Widget Edit' },
];

const DesigningSamples = () => {
  return (
    <section id="designing" className="section-full designing-section">
      
      {/* Glossy Head Artwork - Left Side */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, rotate: -20, x: -100 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="designing-head-wrapper"
      >
         <img src={headImg} alt="Glossy Head Art" className="designing-head-art animate-float" />
      </motion.div>

      <div className="container designing-container">
        
        {/* Large Stacked Title Text (Matching Photogprahy Section) */}
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="designing-title-group"
        >
          <h2 className="designing-title-text">
            DESIGNING
          </h2>
          <h2 className="designing-title-text">
            SAMPLES
          </h2>

          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
            viewport={{ once: true }}
            className="designing-samples-row"
          >
            <div className="designing-cursor-icon"></div>
          </motion.div>
        </motion.div>

      </div>

      {/* Center Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true, amount: 0.1 }}
        className="samples-carousel-anchor"
        style={{ left: '34%', top: '10%', zIndex: 50 }}
      >
        <SampleCarousel images={designImages} label="Designing Samples" />
      </motion.div>

      {/* SHINE Logo Tag - Bottom Right */}
      <motion.div 
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true }}
        className="designing-shine-wrapper"
      >
         <img src={shineImg} alt="SHINE Graffiti Logo" className="designing-shine-logo animate-shine" />
      </motion.div>

    </section>
  );
};

export default DesigningSamples;
