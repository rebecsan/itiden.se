import React from 'react';

interface LogoProps {
  className?: string;
}

export const FindLite: React.FC<LogoProps> = props => {
  return (
    <>
      <svg
        width="34"
        height="44"
        viewBox="0 0 34 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <title>Find</title>
        <path
          d="M33 17.4316C33 22.5162 30.4268 27.6358 27.2085 32.0262C24.0055 36.3957 20.2582 39.9155 18.1112 41.7789C17.4603 42.3438 16.5397 42.3438 15.8888 41.7789C13.7418 39.9155 9.99446 36.3957 6.79154 32.0262C3.57322 27.6358 1 22.5162 1 17.4316C1 8.33289 8.18693 1 17 1C25.8131 1 33 8.33289 33 17.4316Z"
          stroke="#EBEBEB"
          strokeWidth="2"
        />
        <circle cx="17" cy="17" r="7" stroke="#EBEBEB" strokeWidth="2" />
      </svg>
    </>
  );
};
