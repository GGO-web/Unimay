import React from 'react';
import { useDynamicSvgImport } from '@hooks/useDynamicSvgImport';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  iconName: string;
  className?: string;
}

export function Icon({ iconName, className, style, ...props }: IconProps) {
  const { loading, SvgIcon } = useDynamicSvgImport(iconName);

  return (
    <>
      {loading && <p>Loading</p>}

      {SvgIcon && <SvgIcon style={style} {...props} className={className} />}
    </>
  );
}
