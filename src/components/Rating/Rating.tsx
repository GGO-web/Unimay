import React, {useState} from 'react';
import {Rating} from 'react-simple-star-rating';

export const StarRating = () => {
  const [rating, setRating] = useState(4); // initial rating value

  // Catch Rating value
  const handleRating = (rate: number) => {
    setRating(rate);
    // Some logic
  };

  return (
    <div className="App">
      <Rating
        onClick={handleRating}
        initialValue={rating}
        size={20}
        transition
        readonly
        fillColor="orange"
        emptyColor="gray"
      />
      {/* Use rating value */}
      {rating}
    </div>
  );
};
