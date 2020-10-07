import React from 'react';

interface LogoProps {
  className?: string;
}

export const PhoneLite: React.FC<LogoProps> = props => {
  return (
    <>
      <svg
        width="45"
        height="50"
        viewBox="0 0 45 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <title>Phone</title>
        <rect
          x="1.36603"
          y="36.0705"
          width="40"
          height="25"
          rx="3"
          transform="rotate(-60 1.36603 36.0705)"
          stroke="#EBEBEB"
          strokeWidth="2"
        />
        <rect
          x="2.99121"
          y="34.8725"
          width="23.2759"
          height="1.90909"
          transform="rotate(30 2.99121 34.8725)"
          fill="#EBEBEB"
        />
        <rect
          x="22.4154"
          y="2.61252"
          width="22"
          height="1"
          transform="rotate(30 22.4154 2.61252)"
          fill="#EBEBEB"
          stroke="#EBEBEB"
        />
        <rect
          x="13.7592"
          y="36.4897"
          width="3"
          height="1"
          rx="0.5"
          transform="rotate(30 13.7592 36.4897)"
          fill="#EBEBEB"
          stroke="#EBEBEB"
        />
        <path
          d="M28.477 6.11252L35.4052 10.1125L34.6552 11.4116C34.2409 12.129 33.3236 12.3748 32.6061 11.9606L28.276 9.46059C27.5586 9.04638 27.3127 8.12899 27.727 7.41156L28.477 6.11252Z"
          fill="#EBEBEB"
          stroke="#EBEBEB"
        />
      </svg>
    </>
  );
};
