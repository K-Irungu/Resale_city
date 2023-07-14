import React from 'react';
import { useState } from 'react';
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
import './HorizontalLine.css'


export default function SignUp() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false);


  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform form submission logic
    console.log({ name, email, password, agree });

    // Clear form fields
    setName('');
    setEmail('');
    setPassword('');    
    setAgree(false);
  };

  const handleAgreeChange = (event) => {
    setAgree(event.target.checked);
  };

  return (
    <Grid container component="main" sx={{ height: '92vh', bgcolor: '#EEEEEE' }}>
      <CssBaseline />

      {/* Form */}
      <Grid item xs={12} sm={8} md={6} component={Paper} elevation={0} square  >
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '92vh', bgcolor: '#EEEEEE' }}>
      <Box sx={{ my: 'auto', mx: 15 }}>

        {/* Form title */}
        <Typography variant="h4" sx={{ mb: 3 }}>
          Get Started Now
        </Typography>

        {/* Form itself */}
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            required
            fullWidth
            id="name"
            label="Enter your name"
            name="name"
            autoComplete="name"
            autoFocus
            sx={{ my: '10px' }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            required
            fullWidth
            id="email"
            label="Enter your email"
            name="email"
            autoComplete="email"
            sx={{ my: '10px' }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            required
            fullWidth
            name="password"
            label="Enter your password"
            type="password"
            id="password"
            autoComplete="current-password"
            sx={{ mt: '10px', mb: '20px' }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
            required
            control={<Checkbox value="agree" checked={agree} onChange={handleAgreeChange} />}
            label="I agree to the terms and conditions"
            sx={{ mb: '20px' }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: '#0e1111',
              borderRadius: '10px',
              paddingTop: '15px',
              paddingBottom: '15px',
              '&:hover': {
                backgroundColor: '#414a4c',
              },
            }}
          >
            Sign Up
          </Button>

          {/* Horizontal line */}
          <div className="hr-container" style={{ marginTop: '40px', marginBottom: '40px' }}>
            <hr />
            <span className="hr-text">or</span>
          </div>

          <Link
            href="signin"
            variant="body1"
            color="inherit"
            underline="hover"
            sx={{
              '&:hover': {
                backgroundColor: '#F0F0F0',
              },
            }}
          >
            Already have an account? Sign In
          </Link>

        </Box>
      </Box>
      </Box>
      </Grid>

      {/* Image on the side */}
      <Grid
      item
      xs={false}
      sm={4}
      md={6}
      sx={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderBottomLeftRadius: '40px',
        borderTopLeftRadius: '40px',
        boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.2)',
      }}
    />
    </Grid>
  );
}