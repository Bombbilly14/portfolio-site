import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import emailjs from 'emailjs-com';



function Contact() {
  const [open, setOpen] = useState(false);

  

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      e.target,
      process.env.REACT_APP_EMAILJS_USER_ID
    )
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
  }

  const body = (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'white',
        boxShadow: 24,
        borderRadius: 4,
        color: 'grey',
        p: 4,
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <IconButton  sx={{ color: 'grey' }} onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </Box>
      <h2 id="modal-title">Contact Form</h2>
      <form onSubmit={sendEmail}>
          <TextField
            id="from_name"
            name="from_name"
            label="Name"
            variant="outlined"
            margin="normal"
            fullWidth
            required
            // inputProps={{ style: { color: '#f1efef' } }}
          />
          <TextField
            id="reply_to"
            name="reply_to"
            label="Email"
            type="email"
            variant="outlined"
            margin="normal"
            fullWidth
            required
            // inputProps={{ style: { color: '#f1efef' } }}
          />
          <TextField
            sx={{ color: 'grey' }}
            id="message"
            name="message"
            label="Message"
            variant="outlined"
            margin="normal"
            fullWidth
            multiline
            required
            rows={4}
            // inputProps={{ style: { color: '#f1efef' } }}
          />
          <Button type="submit" variant="contained" color="primary">
            Send
          </Button>
        </form>
    </Box>
  );

  return (
    <div id="contact">
      <h2>Like my work? Contact me!</h2>
      <p>
        I'm currently looking for work and opportunities in frontend, backend, and fullstack software engineering
      </p>
      <Button variant="outlined" onClick={handleOpen}>
        Email me
      </Button>
      <Modal
      sx={{color: 'white'}}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

export default Contact;
