import React from 'react'
import './styles/projects.css'

function Projects() {
  return (
    <div id='projects' className='projects-div'>
      
      <h2>Recent Work I've Done</h2>
      <div className="projects-container">
        <div className="project-description">
          <h3>Project 1: Dates With Ruby</h3>
          <p>Dating app made with Rails and React. Active Storage used for image uploading, including MiniMagick for image editing, Action Cable for live chat, and full user authentication with BCrypt. Semantic UI And MUI libraries used for design. Users can create and edit their profile, match with other users, and message them via Action Cable  </p>
          
        </div>
        <div>
        <a href="https://github.com/Bombbilly14/dating-app" target="_blank" rel="noopener noreferrer">
          <div className="project-image-container">
            <img src="dateswithruby.png" alt="Project 1" className="project-image" />
            <div className="project-image-overlay">Github Link</div>
          </div>
        </a>
        </div>
      </div>
      <div className="projects-container">
        <div className="project-description">
          <h3>Project 2: Foodi</h3>
          <p>Recipe sharing app made with Ruby and React. Built with Sinatra and Active Record, users can manage their dashboard, create recipes, and create/edit comments. </p>
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
          <p>Simple Social Media app using React and Rails. The Loop has a "Vent" feature similar to a tweet. Users will find current posts at the top of their page and with both users and post having full CRUD. </p>
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