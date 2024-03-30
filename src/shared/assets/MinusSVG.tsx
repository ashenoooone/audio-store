import React from 'react';

export const MinusSVG = (props: React.SVGProps<SVGSVGElement>) => {
  const { width = 14, height = 2, ...rest } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d="M0 0H14V2H0V0Z" fill="white" />
    </svg>
  );
};
