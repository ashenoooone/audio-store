import React from 'react';

export const PlusSVG = (props: React.SVGProps<SVGSVGElement>) => {
  const { width = 15, height = 14, ...rest } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M6.20557 6V0H8.20557V6H14.2056V8H8.20557V14H6.20557V8H0.205566V6H6.20557Z"
        fill="white"
      />
    </svg>
  );
};
