import React from 'react';

interface LogoProps {
  className?: string;
}

export const MailLite: React.FC<LogoProps> = props => {
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
        <rect x="1" y="1" width="42" height="28" rx="3" strokeWidth="2" />
        <path
          d="M1 3L21.0077 14.433C21.6226 14.7843 22.3774 14.7843 22.9923 14.433L43 3"
          strokeWidth="2"
        />
      </svg>
    </>
  );
};
