import React, { useState } from 'react';
import './styles/projects.css';
import Modal from '@mui/material/Modal';
import Card from './Card';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';

function Projects() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className='projects-div'>
      <br/>
      <h2 >Recent Work I've Done</h2>
      <div id='projects' className="projects-container">
        <div className="project-description">
          <h3>Friends App | <a href='https://www.youtube.com/watch?v=D1NIfQzdMCA' target="_blank" rel="noopener noreferrer">Demo</a> </h3>
          <p>Classic messaging app. Created with React Native, Node.js with Express.js framework, MongoDB, and Socket.io for private messaging. Users can find friends by searching via name or email and send them a friend request. Once connected, users are able to message each other with a modern UI design. Image uploads via Cloudinary</p>
          
        </div>
        <div>
        <a href="https://github.com/Bombbilly14/FriendsApp" target="_blank" rel="noopener noreferrer">
          <div className="project-image-container">
            <img src="FriendsAppPic.png" alt="Project 1" className="project-image" />
            <div className="project-image-overlay">GitHub Link</div>
          </div>
        </a>
        </div>
      </div>
      <div id='projects' className="projects-container">
        <div className="project-description">
          <h3>Dates With Ruby</h3>
          <p>Dating app made with Rails and React. Active Storage used for image uploading, including MiniMagick for image editing, Action Cable for live chat, and full user authentication with BCrypt. Semantic UI And MUI libraries used for design. Users can create and edit their profile, match with other users, and message them via Action Cable  </p>
          
        </div>
        <div>
        <a href="https://github.com/Bombbilly14/dating-app" target="_blank" rel="noopener noreferrer">
          <div className="project-image-container">
            <img src="dateswithruby.png" alt="Project 1" className="project-image" />
            <div className="project-image-overlay">GitHub Link</div>
          </div>
        </a>
        </div>
      </div>
      <div className="projects-container">
        <div className="project-description">
          <h3>The Loop</h3>
          <p>Simple Social Media app using React and Rails. The Loop has a "Vent" feature similar to a tweet. Users will find current posts at the top of their page and with both users and post having full CRUD. </p>
        </div>
        <div>
        <a href="https://github.com/Bombbilly14/social-media-app" target="_blank" rel="noopener noreferrer">
          <div className="project-image-container">
          <img src="theloop.png" alt="Project 3" className="project-image" />
          <div className="project-image-overlay">GitHub Link</div>
          </div>
        </a>
        </div>
      </div>
      <button onClick={handleOpen} className="see-more-projects-btn">
        See more projects
      </button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        className="modal-container"
      >
        <div className="modal-content">
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton sx={{ color: 'grey', position: 'absolute' }} onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          <h2 id="modal-title">Projects</h2>
          <div className="card-container">
            <Card
              title="Foodi"
              description="Collaboration on a recipe sharing app made with Ruby and React. Built with Sinatra and Active Record, users can manage their dashboard, create recipes, and create/edit comments."
              imgSrc="Foodi.png"
              githubLink="https://github.com/JonnyNice/recipeapp"
            />
            <Card
              title="More projects coming soon"
              description=""
              imgSrc=""
              githubLink=""
            />
            <Card
              title="More projects coming soon"
              description=""
              imgSrc=""
              githubLink=""
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Projects;