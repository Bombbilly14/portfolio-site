import React from 'react';
import ContactForm from './ContactForm'
import './styles/experience.css'

function Contact() {

  return (
    <div className="experience-card">
      <h2 className="experience-text">Like my work? Contact me!</h2>
      <p id="contact">
        I'm currently looking for work and opportunities in frontend, backend, and full stack software engineering and web development
      </p>
      <div className="experience-resume">
      <ContactForm buttonText="Email Me" />
      </div>
    </div>
  );
}

export default Contact;
