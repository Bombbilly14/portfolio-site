import React from 'react'
import './styles/header.css'
import ContactForm from './ContactForm'
function Header() {
  return (
    <div className='header-div'>
        <h2>Welcome! My name is</h2>
        <h1>William German</h1>
        <h2>A Fullstack software engineer</h2>
        <ContactForm buttonText='Email Me!'/>
    </div>
  )
}

export default Header