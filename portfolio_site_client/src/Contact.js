import React from 'react';
import ContactForm from './ContactForm'

function Contact() {

  return (
    <div id="contact">
      <h2>Like my work? Contact me!</h2>
      <p>
        I'm currently looking for work and opportunities in frontend, backend, and fullstack software engineering
      </p>
      <ContactForm buttonText="Email Me" />
    </div>
  );
}

export default Contact;
