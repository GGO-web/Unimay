import React, {useState} from 'react';
import {Rating} from 'react-simple-star-rating';

export const StarRating = () => {
  const [rating, setRating] = useState(0); // initial rating value

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
    // Some logic
  };

  return (
    <div className="App">
      <Rating
        onClick={handleRating}
        ratingValue={rating}
        size={20}
        label
        transition
        fillColor="orange"
        emptyColor="gray"
      />
      {/* Use rating value */}
      {rating}
    </div>
  );
};
