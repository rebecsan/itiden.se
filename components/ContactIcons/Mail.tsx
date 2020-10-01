import React from 'react';

interface LogoProps {
  className?: string;
}

export const Mail: React.FC<LogoProps> = props => {
  return (
    <>
      <svg
        width="44"
        height="30"
        viewBox="0 0 44 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <title>Mail</title>
        <rect
          x="1.5"
          y="1.5"
          width="41"
          height="27"
          rx="2.5"
          stroke="#EBEBEB"
          strokeWidth="3"
        />
        <path
          d="M2 4L21.0362 14.4699C21.6363 14.8 22.3637 14.8 22.9638 14.4699L42 4"
          stroke="#EBEBEB"
          strokeWidth="3"
        />
      </svg>
    </>
  );
};
