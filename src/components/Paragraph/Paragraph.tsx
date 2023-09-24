import React, { HTMLAttributes } from 'react';
import cn from 'classnames';

type ParagraphSize = 'xl' | 'lg' | 'md' | 'sm';

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: ParagraphSize;
}

const PARAGRAPH_SIZE_STYLES_MAP: {
  [key: string]: string;
} = {
  xl: 'text-xl',
  lg: 'text-lg',
  md: 'text-md',
  sm: 'text-sm'
};

export const Paragraph = ({
  size = 'md',
  className,
  ...props
}: ParagraphProps) => {
  return (
    <p
      className={cn('text', PARAGRAPH_SIZE_STYLES_MAP[size], className)}
      {...props}
    />
  );
};
