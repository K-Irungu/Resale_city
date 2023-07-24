import React, { useRef } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating'



const Home = () => {
  const secondBoxRef = useRef(null);

  const handleRedirect = (endpoint) => {
// Redirect logic
    window.location.href = `${endpoint}`;
  };

  const handleScrollToSecondBox = () => {
    if (secondBoxRef.current) {
      window.scrollTo({
        top: secondBoxRef.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <CssBaseline />

      <Box
        sx={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1574236170901-59c2f5c99c75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1334&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '93vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          padding: 10,
          color: '#fff',
        }}
      >
        <Box>
          <Typography variant="h2" sx={{ fontWeight: 'bold', color:'#EEEEEE' }}>
          Embrace Pre-Loved Fashion
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '28px', fontWeight: 'bold', color:'#EEEEEE' }}>
          Thrift Together for Sustainable Style and Satisfied Smiles
          </Typography>

          <Box sx={{ marginTop: '20px', width:'100%', display:'flex', justifyContent:'space-between' }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                borderRadius:'10px',
                color: 'black',
                py:1,
                bgcolor:"#EEEEEE",
                flexGrow:1,
                mr:3,
                "&:hover":{backgroundColor:"#F4F0EC"}
              }}
              onClick={handleScrollToSecondBox} // Attached the click event to scroll to the second box
            >
              Shop Now
            </Button>
           
          </Box>

        </Box>
      </Box>

      {/* Second Box Component */}
      <Box
      ref={secondBoxRef} // Attached the ref to the second box component
      sx={{
        background: 'linear-gradient(50deg, #414a4c 55%, #EEEEEE 45%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: 5,

        color: '#fff',
      }}
    >
      
      <Box sx={{
        display:'flex',
        flexDirection:'column',
        paddingTop:10
        
      }}>

        
                <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#EEEEEE', textAlign: 'left' }}>
          What's available
        </Typography>

    <Box sx={{ color: '#EEEEEE' }}>
        {/* Use Typography elements for the list */}
        <Typography variant="h4" sx={{ mt: 9 }}>
          • T-shirts
        </Typography>
        <Typography variant="h4" sx={{ my: 3 }}>
          • Shirts
        </Typography>
        <Typography variant="h4" sx={{ my: 3 }}>
          • Trousers
        </Typography>
        <Typography variant="h4" sx={{ my: 3 }}>
          • Shorts
        </Typography>
        <Typography variant="h4" sx={{ my: 3 }}>
          • Jackets
        </Typography>
        <Typography variant="h4" sx={{ my: 3 }}>
          • Hoodies
        </Typography>
      </Box>

      </Box>






      {/* Product Cards Container */}


      <Box
  sx={{
    display: 'flex',
    flexDirection: 'row',
    marginY: 'auto',
    perspective: '1200px',
    width:"70%"
  }}
>

  {/* Shop Card 1 */}
  <Box         onClick={()=>handleRedirect("BudgetBotique")}

      sx={{
        height: '50vh',
        width: '40%',
        background: '#fff',
        padding: 3,
        color: '#333',
        marginRight: 2,
        borderRadius: '8px',
        boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.2)',
        // Start with no shadow

        // Add the rotation and transition for smooth effect
        transform: 'rotateY(-10deg)',
        transition: 'transform 0.4s',

        ':hover': {
          transform: 'rotateY(-10deg) scale(1.05) translateZ(50px)', // Scale up, move closer to the viewer, and tilt on hover
          zIndex: 1, // Bring the card to the forefront on hover
          boxShadow: '15px 15px 15px rgba(0, 0, 0, 0.2)', // Add shadow on hover
        },
      }}
    >
      {/* Navigation Bar */}
      <Box sx={{ textAlign: 'center', marginBottom: 3}}>
        <Typography variant="h5">Budget Botique</Typography>
      </Box>

      {/* Section with Background Image and Shop Motto */}
      <Box
        sx={{
          position: 'relative',
          height: '40%',
          backgroundImage: 'url("https://images.unsplash.com/photo-1613837233238-c1e78d8b8f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80")', // Replace with the actual image path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '8px',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            bottom: 5,
            left: 5,
            padding: 1,
            background: 'rgba(255, 255, 255, 0.8)',
            borderRadius: "8px"
          }}
        >
          <Typography variant="body1">Style for Less!</Typography>
        </Box>
      </Box>

      {/* Section with Cards of Products */}
      <Box sx={{ display: 'flex', marginTop: 3 }}>
  {/* Product Card 1 */}
  <Box sx={{ flex: '1 1 30%', marginRight: 2 }}>
    {/* Replace the image source and product description */}
    <img src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="Product 1" style={{ width: '100%', height: '70px', borderRadius: '8px' }} />
    <Typography variant="body1">Nike shirt</Typography>
  </Box>

  {/* Product Card 2 */}
  <Box sx={{ flex: '1 1 30%', marginRight: 2 }}>
    {/* Replace the image source and product description */}
    <img src="https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amFja2V0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="Product 2" style={{ width: '100%', height: '70px', borderRadius: '8px' }} />
    <Typography variant="body1">Leather Jacket</Typography>
  </Box>

  {/* Product Card 3 */}
  <Box sx={{ flex: '1 1 30%' }}>
    {/* Replace the image source and product description */}
    <img src="https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJvdXNlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Product 3" style={{ width: '100%', height: '70px', borderRadius: '8px' }} />
    <Typography variant="body1">Black jeans</Typography>
  </Box>
  
</Box>
<Box sx={{ marginTop: 2, alignItems: 'center' }}>
            <Rating
              name="preloved-paradise-rating" // Name for the rating input (optional)
              value={2} // Replace this with the actual rating value for the shop
              precision={0.5} // Set the precision for half-star increments (optional)
              readOnly // Set the rating to be read-only (non-editable)
            />
          </Box>

    </Box>

  {/* Shop  Card 2 */}

  <Box
   onClick={()=>handleRedirect("ThriftHaven")}
      sx={{
        height: '50vh',
        width: '40%',
        background: '#fff',
        padding: 3,
        color: '#333',
        marginRight: 2,
        borderRadius: '8px',
        boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.2)',

        // Add the rotation and transition for smooth effect
        transform: 'rotateY(-10deg)',
        transition: 'transform 0.4s',

        ':hover': {
          transform: 'rotateY(-10deg) scale(1.05) translateZ(50px)', // Scale up, move closer to the viewer, and tilt on hover
          zIndex: 1, // Bring the card to the forefront on hover
          boxShadow: '15px 15px 15px rgba(0, 0, 0, 0.2)', // Add shadow on hover
        },
      }}
    >
      {/* Navigation Bar */}

      <Box sx={{ textAlign: 'center', marginBottom: 3 }}>

        <Typography variant="h5">Thrift Haven</Typography>
      

      </Box>

      {/* Section with Background Image and Shop Motto */}
      <Box
        sx={{
          position: 'relative',
          height: '40%',
          backgroundImage: 'url("https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGhpZnQlMjBzdG9yZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60")', // Replace with the actual image path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '8px',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            bottom: 5,
            left: 5,
            padding: 1,
            background: 'rgba(255, 255, 255, 0.8)',
            borderRadius: "8px"
          }}
        >
          <Typography variant="body1">Fashionably Thrifty!</Typography>
        </Box>
      </Box>

      {/* Section with Cards of Products */}
      <Box sx={{ display: 'flex', marginTop: 3 }}>
        {/* Product Card 1 */}
        <Box sx={{ flex: '1 1 30%', marginRight: 2 }}>
          {/* Replace the image source and product description */}
          <img src="https://images.unsplash.com/photo-1591195853828-11db59a44f6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvcnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="Product 1" style={{ width: '100%', height:"70px", borderRadius: '8px' }} />
          <Typography variant="body1">Shorts</Typography>
        </Box>

        {/* Product Card 2 */}
        <Box sx={{ flex: '1 1 30%', marginRight: 2 }}>
          {/* Replace the image source and product description */}
          <img src="https://media.istockphoto.com/id/154960461/photo/red-sweat-shirt-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=cPVGdWY52XQiBFKoCc-eWdjMJXKdzk_iiGGXCTSZo-U=" alt="Product 2" style={{ width: '100%', height:"70px", borderRadius: '8px' }} />
          <Typography variant="body1">Hoodie</Typography>
        </Box>

        {/* Product Card 3 */}
        <Box sx={{ flex: '1 1 30%' }}>
          {/* Replace the image source and product description */}
          <img src="https://images.unsplash.com/photo-1598032895397-b9472444bf93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hpcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Product 3" style={{ width: '100%', height:"70px", borderRadius: '8px' }} />
          <Typography variant="body1">Shirt</Typography>
        </Box>
      </Box>
      <Box sx={{ marginTop: 2, alignItems: 'center' }}>
            <Rating
              name="preloved-paradise-rating" // Name for the rating input (optional)
              value={1} // Replace this with the actual rating value for the shop
              precision={0.5} // Set the precision for half-star increments (optional)
              readOnly // Set the rating to be read-only (non-editable)
            />
          </Box>
      
    </Box>


  {/* Shop Card 3 */}

  <Box
   onClick={()=>handleRedirect("PrelovedParadise")}
      sx={{
        height: '50vh',
        width: '40%',
        background: '#fff',
        padding: 3,
        color: '#333',
        marginRight: 2,
        borderRadius: '8px',
        boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.2)',
        // Start with no shadow

        // Add the rotation and transition for smooth effect
        transform: 'rotateY(-10deg)',
        transition: 'transform 0.4s',

        ':hover': {
          transform: 'rotateY(-10deg) scale(1.05) translateZ(50px)', // Scale up, move closer to the viewer, and tilt on hover
          zIndex: 1, // Bring the card to the forefront on hover
          boxShadow: '15px 15px 15px rgba(0, 0, 0, 0.2)', // Add shadow on hover
        },
      }}
    >
      {/* Navigation Bar */}
      <Box sx={{ textAlign: 'center', marginBottom: 3 }}>
        <Typography variant="h5">Preloved Paradise</Typography>
      </Box>

      {/* Section with Background Image and Shop Motto */}
      <Box
        sx={{
          position: 'relative',
          height: '40%',
          backgroundImage: 'url("https://images.unsplash.com/photo-1580657018950-c7f7d6a6d990?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNsb3RoaW5nJTIwc3RvcmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60")', // Replace with the actual image path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '8px',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            bottom: 5,
            left: 5,
            padding: 1,
            background: 'rgba(255, 255, 255, 0.8)',
            borderRadius: "8px"
          }}
        >
          <Typography variant="body1">Cherishing Preloved Finds!</Typography>
        </Box>
      </Box>

      {/* Section with Cards of Products */}
      <Box sx={{ display: 'flex', marginTop: 3 }}>
        {/* Product Card 1 */}
        <Box sx={{ flex: '1 1 30%', marginRight: 2 }}>
          {/* Replace the image source and product description */}
          <img src="https://plus.unsplash.com/premium_photo-1671030274122-b6ac34f87b8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29hdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Product 1" style={{ width: '100%', height:'70px', borderRadius: '8px' }} />
          <Typography variant="body1">Coat</Typography>
        </Box>

        {/* Product Card 2 */}
        <Box sx={{ flex: '1 1 30%', marginRight: 2 }}>
          {/* Replace the image source and product description */}
          <img src="https://images.unsplash.com/photo-1589756823695-278bc923f962?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGllfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="Product 2" style={{ width: '100%', height:'70px', borderRadius: '8px' }} />
          <Typography variant="body1">Tie</Typography>
        </Box>

        {/* Product Card 3 */}
        <Box sx={{ flex: '1 1 30%' }}>
          {/* Replace the image source and product description */}
          <img src="https://images.unsplash.com/photo-1605812860427-4024433a70fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9vdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Product 3" style={{ width: '100%', height:'70px', borderRadius: '8px' }} />
          <Typography variant="body1">Boots</Typography>
        </Box>



    </Box>
    <Box sx={{ marginTop: 2, alignItems: 'center' }}>
            <Rating
              name="preloved-paradise-rating" // Name for the rating input (optional)
              value={4.5} // Replace this with the actual rating value for the shop
              precision={0.5} // Set the precision for half-star increments (optional)
              readOnly // Set the rating to be read-only (non-editable)
            />
          </Box>
      </Box>



</Box>



    </Box>


    </>
  );
};

export default Home;
