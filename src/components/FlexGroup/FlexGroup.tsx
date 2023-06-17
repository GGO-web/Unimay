import React, { HTMLAttributes } from 'react';

interface FlexGroupProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const FlexGroup = ({ children, ...props }: FlexGroupProps) => {
  return (
    <div className="flex" {...props}>
      {children}
    </div>
  );
};
