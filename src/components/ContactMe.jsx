import React from 'react';
import { motion } from 'framer-motion';
import statueImg from '../assets/contact-statue.png';
import phoneImg from '../assets/contact-phone.png';

const ContactMe = () => {
  return (
    <section id="contact" className="section-full contact-section">
      
      {/* Background Large Text */}
      <motion.div 
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="contact-title-wrapper"
      >
        <h2 className="contact-title-text">CONTACT ME</h2>
      </motion.div>

      {/* Left Thumbs Up Statue */}
      <motion.div 
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="contact-statue-wrapper"
      >
         <img src={statueImg} alt="Thumbs Up Statue" className="contact-statue-art animate-float-gentle" />
      </motion.div>

      {/* Right Hanging Phone */}
      <motion.div 
        initial={{ opacity: 0, y: -80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", damping: 14, stiffness: 50, delay: 0.3 }}
        viewport={{ once: true, amount: 0.1 }}
        className="contact-phone-wrapper"
      >
         <img src={phoneImg} alt="Hanging Phone" className="contact-phone-art animate-swing" />
      </motion.div>

      <div className="container contact-container">
        
        {/* Contact Details Grid */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="contact-details-grid"
        >
          
          <div className="contact-item">
            <h4 className="contact-label">instagram</h4>
            <p className="contact-value">purvanshn20</p>
          </div>
          
          <div className="contact-item">
            <h4 className="contact-label">Phone Number</h4>
            <p className="contact-value">9079190896</p>
          </div>
          
          <div className="contact-item">
            <h4 className="contact-label">Email Address</h4>
            <p className="contact-value">purvanshnatani3@gmail.com</p>
          </div>
          
          <div className="contact-item">
            <h4 className="contact-label">linkedin</h4>
            <p className="contact-value">Purvansh Natani</p>
          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default ContactMe;
