import React from 'react';
import './styles/header.css';
import ContactForm from './ContactForm';

function Header() {
  return (
    <div className='header-div'>
      <h2>Welcome! My name is</h2>
      <h1 className='name-header'>William German</h1>
      <p className="header-p">A Fullstack software engineer</p>
      <ContactForm buttonText='Email Me!' />

      <hr className='gradient-hr' />

    </div>
  )
}

export default Header;
