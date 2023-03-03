import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import { Menu } from '@mui/icons-material';
import SocialMediaBar from './SocialMediaBar';

const Navigation = () => {
  const [showSocialMediaBar, setShowSocialMediaBar] = useState(true);

  const handleShowSocialMediaBar = () => {
    setShowSocialMediaBar(!showSocialMediaBar);
  };

  return (
    <div style={{ position: 'fixed', left: 0, top: '50%' }}>
      <IconButton
        aria-label="Social Media"
        onClick={handleShowSocialMediaBar}
        style={{
          borderRadius: '50%',
          height: '75px',
          width: '75px',
          backgroundColor: 'transparent',
          boxShadow: 'none',
          borderColor: '#000',
          borderWidth: '2px',
          borderStyle: 'solid',
          color: '#000',
          position: 'relative',
          zIndex: 3,
        }}
      >
        <Menu />
      </IconButton>
      {showSocialMediaBar && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: '0',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <SocialMediaBar />
        </div>
      )}
    </div>
  );
};

export default Navigation;
