import React from 'react';
import Button from '@mui/material/Button';

function Resume() {
  return (
    <div>
      <a href="/resume/myresume.pdf" download>
        <Button variant="outlined">
        My resume
        </Button>
        </a>
    </div>
  );
}

export default Resume;