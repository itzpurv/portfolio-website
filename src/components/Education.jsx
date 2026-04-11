import React from 'react';
import { motion } from 'framer-motion';
import statueImg from '../assets/education-statue.png';

const Education = () => {
  return (
    <section id="education" className="section-full education-section">
      
      {/* Vertical Title Wrapper */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="edu-vertical-wrapper"
      >
        <div className="edu-vertical-title">EDUCATION</div>
      </motion.div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="edu-content">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="edu-block"
          >
            <h3>B.Tech &ndash; Artificial Intelligence & Data Science</h3>
            <div className="sub">
              JECRC Foundation<br/>
              2024 &ndash; Present | Second Year
            </div>
            <p>
              Pursuing my degree while developing technical knowledge and enhancing my creative skills in photography and visual design.
            </p>
          </motion.div>

          <div style={{ height: '3vh' }}></div>

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="edu-block"
          >
            <h3>Senior Secondary (Class XII)</h3>
            <div className="sub">
              MPS International<br/>
              Completed in 2023
            </div>
          </motion.div>

          <div style={{ height: '3vh' }}></div>

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="edu-block"
          >
            <h3>Secondary Education (Class X)</h3>
            <div className="sub">
              MPS International<br/>
              Completed in 2021
            </div>
          </motion.div>

        </div>
      </div>

      {/* Center Image (Statue) */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="edu-center-image"
      >
        <img src={statueImg} alt="Education Statue" />
      </motion.div>

    </section>
  );
};

export default Education;
