import CssBaseline from '@mui/material/CssBaseline';
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ProductCard from './ProductCard'; // Assuming you have a ProductCard component
import ReviewSection from './ReviewSection'; // Assuming you have a ReviewSection component
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

const ThriftHaven = () => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, { ...product, price: 19.99 }]); // Assuming the price is always $19.99 for each product
  };

  // Function to remove a product from the cart
  const removeFromCart = (productId) => {
    setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== productId));
  };

  // Function to calculate the total price of all items in the cart
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  // Function to handle checkout
  const handleCheckout = () => {
    alert('Success! Your order has been confirmed. Thank you for shopping with us.');
    setCartItems([]); // Clear the cart by setting cartItems to an empty array
  };

  return (
    <>
      <CssBaseline />
      <Box sx={{ textAlign: 'center', marginBottom: 1, backgroundColor: 'grey', paddingY: 2, color: '#EEEEEE' }}>
        <Typography variant="h5">PRELOVED PARADISE</Typography>
      </Box>
      <Grid container spacing={2}>
        {/* First Section (Product Cards) */}
        <Grid item xs={8}>
          <Grid container spacing={2}>
            {/* Product Card 1 */}
            <Grid item xs={4}>
              <ProductCard
                title="Coat"
                picUrl="https://plus.unsplash.com/premium_photo-1671030274122-b6ac34f87b8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29hdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                onAddToCart={() =>
                  addToCart({ id: 1, title: 'Nike Shirt', picUrl: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' })
                }
              />
            </Grid>
            {/* Product Card 2 */}
            <Grid item xs={4}>
              <ProductCard
                title="Tie"
                picUrl="https://images.unsplash.com/photo-1589756823695-278bc923f962?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGllfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                onAddToCart={() =>
                  addToCart({ id: 2, title: 'Leather Jacket', picUrl: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amFja2V0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' })
                }
              />
            </Grid>
            {/* Product Card 3 */}
            <Grid item xs={4}>
              <ProductCard
                title="Boots"
                picUrl="https://images.unsplash.com/photo-1605812860427-4024433a70fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9vdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                onAddToCart={() =>
                  addToCart({ id: 3, title: 'Black Jeans', picUrl: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJvdXNlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' })
                }
              />
            </Grid>
            {/* Repeat the above grid items to add more product cards */}
          </Grid>
        </Grid>

        {/* Second Section (Reviews) */}
        <Grid item xs={4}>
          <ReviewSection />
        </Grid>
      </Grid>

      {/* Third Section (My Cart) */}
      <Box sx={{ marginTop: 2, padding: 5 }}>
        <Typography variant="h6" gutterBottom>
          My Cart
        </Typography>
        <List>
          {cartItems.map((item) => (
            <React.Fragment key={item.id}>
              <ListItem>
                <ListItemText primary={item.title} />
                ${item.price.toFixed(2)}
                <IconButton edge="end" aria-label="delete" onClick={() => removeFromCart(item.id)}>
                  <DeleteIcon />
                </IconButton>
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
        <Typography variant="h6">Total: ${calculateTotalPrice().toFixed(2)}</Typography>
        <Button
        variant="contained"
        color="inherit"
        onClick={handleCheckout}
        disabled={cartItems.length === 0}
        style={{ marginTop: '10px' }}
      >
        Checkout
      </Button>
      </Box>
    </>
  );
};

export default ThriftHaven;
