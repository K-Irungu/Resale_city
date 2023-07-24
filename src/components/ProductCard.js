import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CardActions from '@mui/material/CardActions';

const ProductCard = (props) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked((prevIsLiked) => !prevIsLiked);
  };

  return (
    <Card sx={{ padding: 2 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={props.picUrl} alt="Product Image" />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            $19.99
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* Like and Add to Cart buttons */}
      <CardActions>
        <IconButton
          aria-label="add to favorites"
          color={isLiked ? 'secondary' : 'default'}
          onClick={handleLikeClick}
        >
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="add to cart" onClick={props.onAddToCart}>
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
