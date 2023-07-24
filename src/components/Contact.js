import React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import QueryBuilderOutlinedIcon from '@mui/icons-material/QueryBuilderOutlined';
import IconButton from '@mui/material/IconButton';


export default function ContactUs() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform submission logic
    console.log({ name, email, message })

    // Clear form fields
    setName('')
    setEmail('')
    setMessage('')

    alert('Thank you for reaching out! We will get back to you as soon as we can. Thanks!');


  };

  return (
    <>
      <Grid container component="main" sx={{ height: '92vh', position: 'absolute', zIndex: -1 }}>
        <CssBaseline />
        {/* Grey section */}
        <Grid item xs={12} sm={8} md={2.5} component={Paper} elevation={0} square sx={{ bgcolor: '#414a4c', ml: '80%' }} >
        </Grid>

      </Grid>

      {/* The form goes here */}
      <Grid container component="main" sx={{ height: '92vh', position: 'absolute', bgcolor: '#EEEEEE', width: '80%', }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '92vh',
          width: '65%'
        }}>
          <Box
            sx={{
              my: '18vh',
              mx: 12
            }}
          >

            {/* Form title */}
            <Typography variant="h4"  >
              Contact Us
            </Typography>

            <Typography variant="body1" sx={{ mr: 2, mt: 4, mb: 1 }} >
              Feel free to contact us any time. We will get back to you as soon as we can!
            </Typography>

            {/* Form itself */}
            <Box component="form"  onSubmit={handleSubmit} >

              <TextField
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
                variant='standard'
                value={name}
                onChange={(e) => setName(e.target.value)}
                sx={{ my: '10px' }}


              />

              <TextField
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                variant='standard'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ my: '10px' }}
              />
              <TextField
                required
                fullWidth
                name="message"
                label="Message"
                type="message"
                id="message"
                autoComplete="message"
                variant='standard'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                sx={{ my: '10px' }}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: '40px',
                  backgroundColor: '#0e1111',
                  borderRadius: '10px',
                  paddingTop: '15px',
                  paddingBottom: '15px',
                  '&:hover': {
                    backgroundColor: '#414a4c',
                  },
                }}
              >
                Send
              </Button>
            </Box>
          </Box>
        </Box>



      </Grid>

      {/* The Social Media Logogs fgo here */}
      <Grid container component="main" sx={{ height: '60%', position: 'absolute', bgcolor: '#0e1111', width: '677px', ml: '53%', my: '9%', boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.5)' }}>
        <Grid item sx={{ width: '80%', height: '80%', padding:6.5 }}>
          <Typography variant="h4" color="white" sx={{ml:1}}>
            Info</Typography>

          <IconButton sx={{py:3}}>
            <MailOutlineIcon fontSize="large" sx={{ color: "white" }}  ></MailOutlineIcon>
            <Typography variant="body1" color="white" sx={{ml:3}} > info@resalecity.co.ke </Typography>
          </IconButton>
          <br></br>

          <IconButton sx={{py:3}} >
            <LocalPhoneOutlinedIcon fontSize="large" sx={{ color: "white" }}></LocalPhoneOutlinedIcon>
            <Typography variant="body1" color="white" sx={{ml:3}}> +254 797 154 309 </Typography>

          </IconButton>
          <br></br>


          <IconButton  sx={{py:3}}>
            <BusinessOutlinedIcon fontSize="large" sx={{ color: "white" }}></BusinessOutlinedIcon>
            <Typography variant="body1" color="white" sx={{ml:3}} > 3rd Floor, Bihi Towers, Moi Avenue, Nairobi </Typography>

          </IconButton>
          <br></br>


          <IconButton sx={{py:3}} >
            <QueryBuilderOutlinedIcon fontSize="large" sx={{ color: "white" }}></QueryBuilderOutlinedIcon>
            <Typography variant="body1" color="white"  sx={{ml:3}}> 09:00 - 18:00 </Typography>

          </IconButton>



        </Grid >
      </Grid>














    </>

  );
}