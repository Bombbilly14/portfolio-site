import './styles/aboutme.css'
import { React, useState, useEffect } from 'react';


function AboutMe() {


  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setShowContent(true);
      } else {
        setShowContent(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <div className={showContent ? 'content show about-div' : 'content about-div'} id='about'>
      {showContent && (
        <>
      <p>
        Former advertising and marketing professional to fullstack software development, with expertise in both creative and technical aspects.
         I bring a unique perspective to every project I work on, whether it's crafting sleek and intuitive user interfaces or scalable backend architectures. Driven by my persuit of knowledge, teamwork, and coffee. 🏳️‍🌈
        </p>
      <img src="me2.jpg" alt="William" className="about-image"/>
      </>
      )}
    </div>
  )
}

export default AboutMe