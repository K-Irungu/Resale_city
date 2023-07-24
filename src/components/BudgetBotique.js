import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ProductCard from './ProductCard'; // Assuming you have a ProductCard component
import ReviewSection from './ReviewSection'; // Assuming you have a ReviewSection component

const BudgetBotique = () => {
  return (
    <>
      <CssBaseline />
      <Box sx={{ textAlign: 'center', marginBottom: 1, backgroundColor:"grey", paddingY:2, color:"#EEEEEE"}}>
        <Typography variant="h5">BUDGET BOTIQUE</Typography>
      </Box>
      <Grid container spacing={2}>
        {/* First Section (Product Cards) */}
        <Grid item xs={8}>
          <Grid container spacing={2}>
            {/* Product Card 1 */}
            <Grid item xs={4}>
              <ProductCard title="Nike Shirt" picUrl="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"/>
            </Grid>
            {/* Product Card 2 */}
            <Grid item xs={4}>
              <ProductCard title="Leather Jacket" picUrl="https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amFja2V0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
            </Grid>
            {/* Product Card 3 */}
            <Grid item xs={4}>
              <ProductCard title="Black Jeans" picUrl="https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJvdXNlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" />
            </Grid>

            {/* Repeat the above grid items to add more product cards */}









            
          </Grid>
        </Grid>

        {/* Second Section (Reviews) */}
        <Grid item xs={4}>
          <ReviewSection />
        </Grid>
      </Grid>
    </>
  );
};

export default BudgetBotique;
