import React from 'react';
import { motion } from 'framer-motion';
import fallingArtwork from '../assets/about-artwork-new.png';

const About = () => {
  return (
    <section id="about" className="section-full about-section">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="about-title"
        >
          PURVANSH NATANI
        </motion.h2>
        
        <motion.h3 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="about-subtitle"
        >
          About Me
        </motion.h3>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="about-text"
        >
          I’m Purvansh Natani, a creative mind passionate<br/>
          about photography and design. I love capturing<br/>
          unique perspectives through my camera and<br/>
          bringing concepts to life through thoughtful<br/>
          design. My work is driven by curiosity, creativity,<br/>
          and the desire to create visuals that<br/>
          communicate emotions and ideas in a<br/>
          meaningful way.
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9, x: 100 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="about-image"
      >
        <img src={fallingArtwork} alt="Falling Artwork" className="about-bg-artwork" />
      </motion.div>
    </section>
  );
};

export default About;
