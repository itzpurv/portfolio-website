import React from 'react';
import { motion } from 'framer-motion';
import myHeroPhoto from '../assets/hero-photo-transparent.png';

const Hero = () => {
  return (
    <section id="hero" className="section-full hero">
      
      {/* Background large text */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="hero-bg-text-container"
      >
        <div className="hero-my">MY</div>
        <h1 className="hero-portfolio-text">PORTFOLIO</h1>
      </motion.div>

      {/* Center Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="hero-image-wrapper"
      >
        <img src={myHeroPhoto} alt="Purvansh Natani" className="hero-subject-photo" />
      </motion.div>

      {/* Overlay Details */}
      <div className="hero-overlay">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="hero-date-name"
        >
          <div className="date">SEPTEMBER / 2005</div>
          <div className="name">PURVANSH NATANI</div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className="hero-quote"
        >
          If you have a vision that deserves to be seen — let's make it unforgettable.
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          viewport={{ once: true }}
          className="hero-roles"
        >
          <div>Graphic Designer</div>
          <div>Photographer</div>
          <div>Photoediting</div>
          <div>Ui/Ux</div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Hero;
