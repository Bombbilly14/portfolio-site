import React from 'react'
import './styles/projects.css'

function Projects() {
  return (
    <div id='projects' className='projects-div'>
      
      <h2>Here are some of the projects I have worked on</h2>
      <div className="projects-container">
        <div className="project-description">
          <h3>Project 1: Dates With Ruby</h3>
          <p>Description of the project goes here...here...here...here...here...here...here...here...here...here...</p>
          <p>here...here...here...here...here...here...</p>
        </div>
        <div>
        <a href="https://github.com/Bombbilly14/dating-app" target="_blank" rel="noopener noreferrer">
          <div className="project-image-container">
            <img src="Foodi.png" alt="Project 1" className="project-image" />
            <div className="project-image-overlay">Github Link</div>
          </div>
        </a>
        </div>
      </div>
      <div className="projects-container">
        <div className="project-description">
          <h3>Project 2: Foodi</h3>
          <p>Description of the project goes here...</p>
        </div>
        <div>
        <a href="https://github.com/JonnyNice/recipeapp" target="_blank" rel="noopener noreferrer">
          <div className="project-image-container">
            <img src="Foodi.png" alt="Project 1" className="project-image" />
            <div className="project-image-overlay">Github Link</div>
          </div>
        </a>
        </div>
      </div>
      <div className="projects-container">
        <div className="project-description">
          <h3>Project 3: The Loop</h3>
          <p>Description of the project goes here...</p>
        </div>
        <div>
        <a href="https://github.com/Bombbilly14/social-media-app" target="_blank" rel="noopener noreferrer">
          <div className="project-image-container">
          <img src="theloop.png" alt="Project 3" className="project-image" />
          <div className="project-image-overlay">Github Link</div>
          </div>
        </a>
        </div>
      </div>
    </div>
    
  )
}

export default Projects