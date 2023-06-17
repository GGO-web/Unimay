import React, { HTMLAttributes } from 'react';
import cn from 'classnames';

interface FlexGroupProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  centerY?: boolean;
  center?: boolean;
  column?: boolean;
  gap?: number;
}

export const FlexGroup = ({
  children,
  className,
  center = false,
  centerY = false,
  column = false,
  gap = 10,
  ...props
}: FlexGroupProps) => {
  return (
    <div
      className={cn(
        'flex',
        className,
        centerY && 'items-center',
        center && 'justify-center',
        column && 'flex-col'
      )}
      style={{
        gap: gap
      }}
      {...props}
    >
      {children}
    </div>
  );
};
