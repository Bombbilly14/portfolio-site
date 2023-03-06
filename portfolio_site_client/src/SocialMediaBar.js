import React from 'react';
import { IconButton } from '@mui/material';
import { LinkedIn } from '@mui/icons-material';
import GitHubIcon from '@mui/icons-material/GitHub';
import JoinLeftIcon from '@mui/icons-material/JoinLeft';

const SocialMediaBar = () => {

  return (
    <div>
      <IconButton
        style={{color: '#B2308C'}}
        aria-label="GitHub"
        href="https://github.com/Bombbilly14"
        target="_blank"
      >
        <GitHubIcon />
      </IconButton>
      <IconButton
        style={{color: '#B2308C'}}
        aria-label="Medium"
        href="https://medium.com/@william.j.german2"
        target="_blank"
      >
        <JoinLeftIcon />
      </IconButton>
      <IconButton
        style={{color: '#B2308C'}}
        aria-label="LinkedIn"
        href="https://www.linkedin.com/in/williamgermansoftware/"
        target="_blank"
        alt="Medium Blogs"
      >
        <LinkedIn />
      </IconButton>
    </div>
  );
};

export default SocialMediaBar;
