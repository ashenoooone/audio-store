import React from 'react';

export const StarSVG = (props: React.SVGProps<SVGSVGElement>) => {
  const { width = 23, height = 21, ...rest } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M12.6268 18.0143L5.41618 22.3656L7.37647 14.2449L0.960754 8.81491L9.38215 8.14829L12.6268 0.439671L15.8715 8.14829L24.2941 8.81491L17.8771 14.2449L19.8374 22.3656L12.6268 18.0143Z"
        fill="#FFCE7F"
      />
    </svg>
  );
};
