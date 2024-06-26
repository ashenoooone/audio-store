import React, { ReactNode } from 'react';

interface FilledHeartSVGProps {
  className?: string;
  children?: ReactNode;
}

export const FilledHeartSVG = (
  props: React.SVGProps<SVGSVGElement>,
) => {
  const { width = 24, height = 25, ...rest } = props;

  return (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      height={height}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
  );
};
