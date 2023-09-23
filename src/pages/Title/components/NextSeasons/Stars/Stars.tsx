import { Icon } from '@components/Icon/Icon';
import React from 'react';

import ReactStars from 'react-rating-stars-component';

interface StarsProps {
  value: number;
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
        onChange={ratingChanged}
        isHalf={true}
        emptyIcon={<Icon iconName="empty-icon-star" />}
        halfIcon={<Icon iconName="half-icon-star" />}
        filledIcon={<Icon iconName="filled-icon-star" />}
        edit={edit}
      />
    </div>
  );
};
