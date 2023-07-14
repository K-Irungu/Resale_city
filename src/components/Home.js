// import * as React from 'react';
// import Button from '@mui/material/Button';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import CssBaseline from '@mui/material/CssBaseline';
// import Grid from '@mui/material/Grid';
// import Stack from '@mui/material/Stack';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';


// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // TODO remove, this demo shouldn't need to reset the theme.
// const defaultTheme = createTheme();

// export default function Home() {
//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <CssBaseline />

//       <main>
//         {/* Hero unit */}
//         <Box
//           sx={{
//             // bgcolor: 'background.paper',
//             bgcolor: 'blue',
//             pt: 8,
//             pb: 6,
//             pl: 6,
//             // height:'50vh',


//             position: 'relative',
//             backgroundColor: 'grey.800',
//             color: '#fff',
//             mb: 4,
//             backgroundSize: 'cover',
//             backgroundRepeat: 'no-repeat',
//             backgroundPosition: 'center',
//             backgroundImage: `url(https://images.unsplash.com/photo-1525562723836-dca67a71d5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80)`,

//           }}
//         >
//           <div>
//             <h1>Feel what's real</h1>
//             <p><b>Introducing apparel made with natural materials</b></p>
//             <Button variant="contained"  sx={{color:'white'}}>Shop Men</Button>
//             <Button variant="contained">Shop Men</Button>


//           </div>

//           {/* <Container maxWidth="sm" sx={{ ml:0, bgcolor:'grey', pl:0}}>
//             <Typography
//               component="h1"
//               variant="h2"
//               color="white"
//               // fontSize="50px"
              
//             >
//               Feel What's Real
//             </Typography>


//             <Typography variant="h5" color="white" paragraph >
// Introducing apparel made with natural materials
//             </Typography>


//             <Stack
//               sx={{ pt: 1 }}
//               direction="row"
//               justifyContent='space-between'


//             >
//               <Button variant="contained" >Shop Men</Button>
//               <Button variant="contained">Shop Women</Button>
//             </Stack>
//           </Container> */}
//         </Box>
//         <Container sx={{ py: 8 }} maxWidth="md">



//           {/* End hero unit */}
//           <Grid container spacing={4}>
//             {cards.map((card) => (
//               <Grid item key={card} xs={12} sm={6} md={4}>
//                 <Card
//                   sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
//                 >
//                   <CardMedia
//                     component="div"
//                     sx={{
//                       // 16:9
//                       pt: '56.25%',
//                     }}
//                     image="https://source.unsplash.com/random?wallpapers"
//                   />
//                   <CardContent sx={{ flexGrow: 1 }}>
//                     <Typography gutterBottom variant="h5" component="h2">
//                       Heading
//                     </Typography>
//                     <Typography>
//                       This is a media card. You can use this section to describe the
//                       content.
//                     </Typography>
//                   </CardContent>
//                   <CardActions>
//                     <Button size="small">View</Button>
//                     <Button size="small">Edit</Button>
//                   </CardActions>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </main>
//       {/* Footer */}
//       <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
//         <Typography variant="h6" align="center" gutterBottom>
//           Footer
//         </Typography>
//         <Typography
//           variant="subtitle1"
//           align="center"
//           color="text.secondary"
//           component="p"
//         >
//           Something here to give the footer a purpose!
//         </Typography>

//       </Box>
//       {/* End footer */}
//     </ThemeProvider>
//   );
// }


import React from 'react'

const Home = () => {
  return (
    <div>Home</div>
  )
}

export default Home