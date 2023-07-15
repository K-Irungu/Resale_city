import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


function Copyright() {
  return (
    <Typography variant="body2" color="white">
      {'Copyright © '}

      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


export default function Footer() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: 'auto',
          textAlign:'center',
        }}
      >

        <Box
          component="footer"
          sx={{
            py: 2,
            px: 2,
            mt: 'auto',
            backgroundColor: 'black'
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="body1" sx={{color:'white'}}>
              {/* This is the footer */}
            </Typography>
            <Copyright />
          </Container>
        </Box>

        
      </Box>
    </>
  );
}