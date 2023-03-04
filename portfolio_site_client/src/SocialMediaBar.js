import React from 'react';
import { IconButton } from '@mui/material';
import {  Twitter, LinkedIn } from '@mui/icons-material';
import GitHubIcon from '@mui/icons-material/GitHub';


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
        aria-label="Twitter"
        href="https://twitter.com/"
        target="_blank"
      >
        <Twitter />
      </IconButton>
      <IconButton
        style={{color: '#B2308C'}}
        aria-label="LinkedIn"
        href="https://www.linkedin.com/in/williamgermansoftware/"
        target="_blank"
      >
        <LinkedIn />
      </IconButton>
    </div>
  );
};

export default SocialMediaBar;
