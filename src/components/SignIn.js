import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';




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
    <Grid container component="main" sx={{ height: '92vh', bgcolor:'#EEEEEE' }}>
      <CssBaseline />

      <Grid item xs={12} sm={8} md={6} component={Paper} elevation={0} square  >
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '92vh',
          bgcolor:'#EEEEEE'
        }}>
          <Box
            sx={{
              my: 'auto',
              mx: 15
            }}
          >

            <Typography variant="h4" sx={{ mt: 1, mb: 4 }} >
             Welcome Back!
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} >


              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Enter your email"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Enter your password"
                type="password"
                id="password"
                autoComplete="current-password"
              />



              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: '#0e1111',
                  borderRadius: '10px',
                  mt: 2
                  
                }}
              >
                Sign In
              </Button>
              <Grid container>


              </Grid>
              <br></br>

              <div class="hr-container">
                <hr/>
                  <span class="hr-text">or</span>
              </div>

              <br></br>

                  <Link href="#" variant="body1" color="inherit" underline="hover"> 
                    {"Don't have an account? Sign Up"}
                  </Link>



              <Copyright sx={{ mt: 5 }} />
            </Box>

          </Box>


        </Box>

      </Grid>


      <Grid
        item
        xs={false}
        sm={4}
        md={6}
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderBottomLeftRadius: '40px',
          borderTopLeftRadius: '40px',
        }}
      />
    </Grid>
  );
}