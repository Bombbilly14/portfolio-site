import React from 'react';
import ContactForm from './ContactForm'
import './styles/contact.css'

function Contact() {

  return (
    <div className="contact-div">
      <h2>Like my work? Contact me!</h2>
      <p id="contact">
        I'm currently looking for work and opportunities in frontend, backend, and full stack software engineering and web development
      </p>
      <ContactForm buttonText="Email Me" />
    </div>
  );
}

export default Contact;
