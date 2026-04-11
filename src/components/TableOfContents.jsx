import React from 'react';
import { motion } from 'framer-motion';
import statueLeftImg from '../assets/statue.png';

const TableOfContents = () => {
  return (
    <section id="toc" className="section-full">
      <div className="container">
        
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="toc-title"
        >
          TABLE OF CONTENTS
        </motion.h2>

        <div className="toc-content">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="toc-column"
          >
            <a href="#hero" className="toc-btn">Home</a>
            <a href="#about" className="toc-btn">About Me</a>
            <a href="#education" className="toc-btn">Education</a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="toc-center-image"
          >
            <img src={statueLeftImg} alt="Center Statue" className="animate-float-gentle" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="toc-column"
          >
            <a href="#skills" className="toc-btn">Skills</a>
            <a href="#designing" className="toc-btn">Designing</a>
            <a href="#photography" className="toc-btn">Photography</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TableOfContents;
