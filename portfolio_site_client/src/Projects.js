import React from 'react'
import './styles/projects.css'

function Projects() {
  return (
    <div>
      
      <h2>Here are some of the projects I have worked on</h2>
      <div className="projects-container">
        <div className="project-description">
          <h3>Project 1: Dates With Ruby</h3>
          <p>Description of the project goes here...here...here...here...here...here...here...here...here...here...</p>
          <p>here...here...here...here...here...here...</p>
        </div>
        <div>
          <img src="Foodi.png" alt="Project 1" className="project-image" />
        </div>
      </div>
      <div className="projects-container">
        <div className="project-description">
          <h3>Project 2: Foodi</h3>
          <p>Description of the project goes here...</p>
        </div>
        <div>
          <img src="Foodi.png" alt="Project 2" className="project-image"/>
        </div>
      </div>
      <div className="projects-container">
        <div className="project-description">
          <h3>Project 3: The Loop</h3>
          <p>Description of the project goes here...</p>
        </div>
        <div>
          <img src="theloop.png" alt="Project 3" className="project-image" />
        </div>
      </div>
    </div>
    
  )
}

export default Projects