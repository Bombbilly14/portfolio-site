import React from 'react';
import Resume from './Resume.js';
import './styles/experience.css';

function Experience() {
  return (
    <div className="experience-card">
      <div className="experience-text">
        <h2>Experience</h2>
        <p>To see my most recent work experience and projects, please download my resume below</p>
      </div>
      <div className="experience-resume">
        <Resume />
      </div>
    </div>
  );
}

export default Experience;
