import React, { useState } from 'react';
import { Icon } from '@components/Icon/Icon';
import { FlexGroup } from '@components/FlexGroup/FlexGroup';

export const StarRating = () => {
  const [rating, setRating] = useState(4); // initial rating value

  return (
    <FlexGroup centerY>
      <FlexGroup gap={0}>
        {new Array(rating).fill(
          <Icon
            style={{
              color: 'var(--color-yellow)'
            }}
            iconName={'star'}
          />
        )}
      </FlexGroup>

      <ul>
        <li>345 голосів</li>
      </ul>
    </FlexGroup>
  );
};
