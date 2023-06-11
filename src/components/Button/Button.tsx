import React, {HTMLAttributes, StyleHTMLAttributes, SVGAttributes} from 'react';
import {Icon} from '@components/Icon/Icon';
import cn from 'classnames';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  iconName?: string;
  iconProps?: SVGAttributes<any>;
}

export const Button = ({
  children,
  iconName,
  className,
  iconProps,
  ...props
} : ButtonProps) => {
  return (
    <button className={cn('button btn-reset', className)} {...props}>
      {iconName && <Icon iconName={iconName} {...iconProps} />}
      {children}
    </button>
  );
};
