import React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import './Navbar.css';


const mainPages = ['Home', 'About', 'Contact'];
const userPages = ['Sign In', 'Sign Up'];

const Navbar = () => {

  return (
    <AppBar position='relative' sx={{ backgroundColor: "#0e1111" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters >

          <Typography
            variant="h6"
            noWrap

            sx={{
              ml: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',

            }}
          >
            RESALE CITY
          </Typography>


          <Box sx={{ flexGrow: 1, justifyContent: "center", display: { xs: 'none', md: 'flex' } }}>
            {mainPages.map((page) => (
              <Link key={page} href={page.split(' ').join('').toLowerCase()} sx={{ textDecoration: 'none', mr: 1, ml: 1 }}>
                <Button
                  key={page}
                  sx={{ pl: 3, pr: 3, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>


              </Link>

            ))}
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {userPages.map((page) => 


            
            (

                <Link key={page} href={page.split(' ').join('').toLowerCase()} sx={{ textDecoration: 'none', ml: 1, mr: 1 }}>
                  <Button
                    key={page}
                    sx={{ pl: 3, pr: 3, color: 'white', display: 'block' }}
                  >
                    {page}
                  </Button>


                </Link>

              )


            )}

          </Box>


        </Toolbar>

      </Container>
    </AppBar>
  )
}

export default Navbar