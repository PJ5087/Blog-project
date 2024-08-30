import React from 'react';
import './Contact.css';
import { FaPhone, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <div className="contact-info">
        <div className="contact-item">
          <FaPhone className="contact-icon" />
          <span className="contact-text">+91-6202218816</span>
        </div>
        <div className="contact-item">
          <FaWhatsapp className="contact-icon" />
          <span className="contact-text">+91-6202218816</span>
        </div>
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <span className="contact-text">pankaj.aps.5087@gamil.com</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
