import React from 'react';
import { motion } from 'framer-motion';
import filmImg from '../assets/film-strip.png';
import cameraImg from '../assets/camera-hanging.png';
import SampleCarousel from './SampleCarousel';

import photo1 from '../assets/photo1.png.png';
import photo2 from '../assets/photo2.png.png';
import photo3 from '../assets/photo3.png.png';
import photo4 from '../assets/photo4.png.jpeg';
import photo5 from '../assets/photo5.png.png';

const photoImages = [
  { src: photo1, alt: 'Bismil Ki Mehfil' },
  { src: photo2, alt: 'The Art of Loosing & Hustling' },
  { src: photo3, alt: 'Nayabara' },
  { src: photo4, alt: 'Night City Lights' },
  { src: photo5, alt: 'The Land of Fog' },
];

const PhotographySamples = () => {
  return (
    <section id="photography" className="section-full photography-section">
      
      {/* Film Strip Artwork - Left Side */}
      <motion.div 
        initial={{ opacity: 0, y: -200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="photography-film-wrapper"
      >
         <img src={filmImg} alt="Film Strip" className="photography-film-art" />
      </motion.div>

      <div className="container photography-container">
        
        {/* Large Stacked Title Text (Matching Designing Section) */}
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="photography-title-group"
        >
          <h2 className="photography-title-text">
            PHOTOGRAPHY
          </h2>
          <h2 className="photography-title-text">
            SAMPLES
          </h2>
        </motion.div>

      </div>

      {/* Center Carousel - positioned in the empty middle of the section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true, amount: 0.1 }}
        className="samples-carousel-anchor"
        style={{ top: '10%', left: '15%', zIndex: 50 }}
      >
        <SampleCarousel images={photoImages} label="Photography Samples" />
      </motion.div>

      {/* Hanging Camera Artwork - Right Side */}
      <motion.div 
        initial={{ opacity: 0, y: -500 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", damping: 10, stiffness: 50, delay: 0.3 }}
        viewport={{ once: true }}
        className="photography-camera-wrapper-img"
      >
         <img src={cameraImg} alt="Hanging Camera" className="photography-camera-img animate-swing" />
      </motion.div>

    </section>
  );
};

export default PhotographySamples;
