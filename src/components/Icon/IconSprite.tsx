import React from 'react';

import spriteUrl from '@assets/svg/sprite.svg';

interface IconSpriteProps extends React.SVGProps<SVGSVGElement> {
  iconName: string;
}

export const IconSprite = ({ iconName, ...props }: IconSpriteProps) => {
  return (
    <svg {...props} height={'auto'}>
      <use xlinkHref={spriteUrl + '#' + iconName} />
    </svg>
  );
};
