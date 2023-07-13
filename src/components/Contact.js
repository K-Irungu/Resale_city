import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import QueryBuilderOutlinedIcon from '@mui/icons-material/QueryBuilderOutlined';
import IconButton  from '@mui/material/IconButton';




function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}

      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
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
      <Grid container component="main" sx={{ height: '92vh', position: 'absolute', bgcolor: '#EEEEEE', width: '80%' }}>
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

            <Typography variant="h4"  >
              Contact Us
            </Typography>

            <Typography variant="body1" sx={{ mr: 2, mt: 2, mb: 2 }} >
              Feel free to contact us any time. We will get back to you as soon as we can!
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} >

              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
                variant='standard'

              />

              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                variant='standard'
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                variant='standard'
              />
              <br></br>


              <br></br>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: '#0e1111',
                  borderRadius: '10px',
                  mt: 1,
                  paddingTop:"15px",
                  paddingBottom:'15px',

                }}
              >
                Send
              </Button>

            </Box>

          </Box>


        </Box>



      </Grid>

      {/* The Social Media Logogs fgo here */}
      <Grid container component="main" sx={{ height: '62vh', position: 'absolute', bgcolor: '#0e1111', width: '677px', ml: '53%', my: '8.5%' }}>
        <Grid item sx={{ width: '80%', m: 'auto', height: '80%' }}>
          <Typography variant="h4" color="white">
            Info</Typography>
            <IconButton >
              <MailOutlineIcon fontSize="large" sx={{color:"white"}}  ></MailOutlineIcon>
              <Typography variant="body1" color="white" sx={{ml:4}}> info@getintouch.we </Typography>
            </IconButton>
            <br></br>

            <IconButton >
              <LocalPhoneOutlinedIcon fontSize="large" sx={{color:"white"}}></LocalPhoneOutlinedIcon>
              <Typography variant="body1" color="white" sx={{ml:4}}> info@getintouch.we </Typography>

            </IconButton>
            <br></br>
            
            
            <IconButton >
              <BusinessOutlinedIcon fontSize="large" sx={{color:"white"}}></BusinessOutlinedIcon>
              <Typography variant="body1" color="white" sx={{ml:4}}> info@getintouch.we </Typography>

            </IconButton> 
            <br></br>
           
            
            <IconButton >
              <QueryBuilderOutlinedIcon fontSize="large" sx={{color:"white"}}></QueryBuilderOutlinedIcon>
              <Typography variant="body1" color="white" sx={{ml:4}}> info@getintouch.we </Typography>

            </IconButton>
            
            

        </Grid >
      </Grid>














    </>

  );
}