import React from 'react';

//@ts-ignore
import ReactStars from 'react-rating-stars-component'; // solve the problem with typeScript?

interface StarsProps {
  value: 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5;
  edit: boolean;
}

export const Stars: React.FC<StarsProps> = ({ value, edit }) => {
  const ratingChanged = (newRating: number) => {
    console.log(newRating);
  };

  return (
    <div className="stars">
      <ReactStars
        value={value}
        count={5}
        className="star"
        onChange={ratingChanged}
        size={30}
        isHalf={true}
        emptyIcon={<i className="far fa-star" />}
        halfIcon={<i className="fa fa-star-half-alt" />}
        fullIcon={<i className="fa fa-star" />}
        activeColor="#ffd700"
        color="white"
        edit={edit}
      />
    </div>
  );
};
