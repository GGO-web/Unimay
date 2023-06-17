import React, { HTMLAttributes } from 'react';
import cn from 'classnames';

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: number;
  as?: string;
}

export const Heading = ({
  level = 2,
  as,
  className,
  ...props
}: HeadingProps) => {
  const titleLevel = as ? as : `h${level}`;

  const headerElement = React.createElement(titleLevel, {
    className: cn(className, 'title'),
    ...props
  });

  return headerElement;
};
