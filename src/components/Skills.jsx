import React from 'react';
import { motion } from 'framer-motion';
import canvaImg from '../assets/skill-canva.png';
import psImg from '../assets/skill-photoshop.png';
import figmaImg from '../assets/skill-figma.png';
import prImg from '../assets/skill-premiere.png';
import lrImg from '../assets/skill-lightroom.png';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const Skills = () => {
  return (
    <section id="skills" className="section-full">
      <div className="container">
        
        {/* Top area with Title and Icons */}
        <div className="skills-top">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="skills-title"
          >
            SKILLS
          </motion.h2>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="skills-icons-row"
          >
            {[
              { src: canvaImg, alt: "Canva" },
              { src: psImg, alt: "Photoshop" },
              { src: figmaImg, alt: "Figma" },
              { src: prImg, alt: "Premiere Pro" },
              { src: lrImg, alt: "Lightroom" }
            ].map((skill, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="skill-icon-3d"
              >
                <img src={skill.src} alt={skill.alt} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Content area */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="skill-category"
        >
          <div className="skill-btn">PHOTOGRAPHY</div>
          <p className="skill-desc">
            Photography is my way of expressing creativity and capturing meaningful moments. I focus on composition, lighting, and perspective to create visually engaging images that tell a story. Each photograph reflects my curiosity, creativity, and passion for visual storytelling.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="skill-category"
        >
          <div className="skill-btn">DESIGNING</div>
          <p className="skill-desc">
            Design is a way for me to bring creativity and ideas to life. I enjoy creating visuals that are clean, impactful, and aesthetically pleasing. By paying attention to color, layout, and detail, I strive to produce designs that effectively communicate and leave a strong visual impression.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
