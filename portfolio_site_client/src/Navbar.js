import * as React from 'react';
import { navData } from "./navData.js";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import { Button } from '@mui/material';
import './styles/navbar.css'


function HideOnScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}



export default function HideAppBar(props) {
  const handleNavClick = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <React.Fragment>
      <CssBaseline/>
      <HideOnScroll {...props}>
        <AppBar sx={{backgroundColor: '#1B0844', opacity: 0.8}}>
        <Toolbar sx={{justifyContent: 'right'}}>
        {navData.map((navItem) => (
          <Button
          key={navItem.id}
          onClick={(event) => handleNavClick(event, navItem.link.slice(1))}
          color="inherit"
          className="nav-button" 
        >
          {navItem.text}
        </Button>
        ))}
      </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar  />
    </React.Fragment>
  );
}