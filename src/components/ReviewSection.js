import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


const ReviewSection = () => {
  const [newReview, setNewReview] = useState('');
  const [reviews, setReviews] = useState([
    {
      id: 1,
      user: 'John Doe',
      review: 'Great product! I love it.',
    },
    {
      id: 2,
      user: 'Jane Smith',
      review: 'Good value for money.',
    },
    {
      id: 3,
      user: 'Anonymous',
      review: 'This is a fantastic budget boutique!',
    },
  ]);

  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
    setReviews(storedReviews);
  }, []);

  useEffect(() => {
    localStorage.setItem('reviews', JSON.stringify(reviews));
  }, [reviews]);

  const handleReviewChange = (event) => {
    setNewReview(event.target.value);
  };

  const addReview = (event) => {
    event.preventDefault();
    if (newReview.trim() === '') {
      return;
    }

    const newReviewObject = {
      id: reviews.length + 1,
      user: 'Anonymous', // You can implement a user authentication system to get the actual user name
      review: newReview,
    };

    setReviews([...reviews, newReviewObject]);
    setNewReview('');
  };

  const removeReview = (id) => {
    const updatedReviews = reviews.filter((review) => review.id !== id);
    setReviews(updatedReviews);
  };

  return (
    <Box sx={{padding:5}} >
      <Typography variant="h6" gutterBottom>
        Reviews
      </Typography>
      <List>
        {reviews.map((review) => (
          <React.Fragment key={review.id}>
            <ListItem>
              <ListItemText primary={review.user} secondary={review.review} />
              {review.user === 'Anonymous' && (
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => removeReview(review.id)}
                >
                  <DeleteIcon />
                </IconButton>
              )}
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
      <form onSubmit={addReview}>
        <TextField
          label="Add your review"
          value={newReview}
          onChange={handleReviewChange}
          multiline
          fullWidth
          required
        />
        <Button type="submit" variant="contained" color="inherit" style={{ marginTop: '10px' }}>
          Submit Review
        </Button>
      </form>
    </Box>
  );
};

export default ReviewSection;
