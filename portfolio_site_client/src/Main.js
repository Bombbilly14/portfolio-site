import React from 'react'
import AboutMe from './AboutMe'
import Experience from './Experience'
import Projects from './Projects'
import Contact from './Contact'
import Header from './Header'
import './styles/main.css'

function Main() {
  return (
    <div className='main-container'>
        <Header />
        <AboutMe />
        <Projects />
        <Experience />
        <Contact />
    </div>
  )
}

export default Main