import React from 'react';
import { FlexGroup } from '@components/FlexGroup/FlexGroup';

export const TrailerPlayer = () => {
  return (
    <FlexGroup className="trailer-container">
      <iframe
        className={'w-full aspect-video'}
        src="https://www.youtube.com/embed/i66VJnh-hYc"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </FlexGroup>
  );
};
