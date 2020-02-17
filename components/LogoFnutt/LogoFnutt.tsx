import React from 'react';

interface LogoFnuttProps {
  className?: string;
}

export const LogoFnutt: React.FC<LogoFnuttProps> = props => {
  return (
    <svg
      width="88"
      height="96"
      viewBox="0 0 88 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M88 0H0L36.3846 96H51.6154L88 0Z" fill="#504DD2" />
    </svg>
  );
};
