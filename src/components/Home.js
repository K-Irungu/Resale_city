import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
// import { CssBaseline } from '@mui/material';


const Home = () => {
  return (
    <>
    <CssBaseline />

<Box
        sx={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1574236170901-59c2f5c99c75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1334&q=80)', // Replace with the path to your background image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '92vh', // Set the desired height of the section
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          padding: 10,
          color: '#fff',
        
        }}
      >
        <Box >
        <Typography variant="h1" sx={{ fontWeight: 'bold', color:'#EEEEEE' }}>
          Feel what's real
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '28px', fontWeight: 'bold', color:'#EEEEEE' }}>
          Introducing apparel made from natural materials
        </Typography>

        <Box sx={{ marginTop: '20px', width:'100%', display:'flex', justifyContent:'space-between' }}>
          <Button variant="contained" size="large"  sx={{ borderRadius:'10px', color: 'black', py:1, bgcolor:"#EEEEEE", flexGrow:1, mr:3, "&:hover":{backgroundColor:"#F4F0EC"}}}>
            Shop Men
          </Button>
          <Button variant="contained"  size="large" sx={{ borderRadius:'10px', color: 'black', py:1, bgcolor:"#EEEEEE", flexGrow:1,"&:hover":{backgroundColor:"#F4F0EC"}}}>
            Shop Women
          </Button>

        </Box>

        </Box>
      </Box>
    </>
  )
}

export default Home