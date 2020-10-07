import React from 'react';

interface LogoProps {
  className?: string;
}

export const Find: React.FC<LogoProps> = props => {
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
          d="M32.5 17.4316C32.5 22.3581 30.0005 27.3717 26.8052 31.7306C23.6331 36.0581 19.9163 39.5502 17.7835 41.4013C17.3206 41.803 16.6794 41.803 16.2165 41.4013C14.0837 39.5502 10.367 36.0581 7.1948 31.7306C3.99955 27.3717 1.5 22.3581 1.5 17.4316C1.5 8.59714 8.47481 1.5 17 1.5C25.5252 1.5 32.5 8.59714 32.5 17.4316Z"
          strokeWidth="3"
        />
        <circle cx="17" cy="17" r="6.5" strokeWidth="3" />
      </svg>
    </>
  );
};
