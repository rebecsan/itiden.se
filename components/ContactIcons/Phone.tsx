import React from 'react';

interface LogoProps {
  className?: string;
}

export const Phone: React.FC<LogoProps> = props => {
  return (
    <>
      <svg
        width="48"
        height="54"
        viewBox="0 0 48 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <title>Phone</title>
        <rect
          x="2.04904"
          y="38.2536"
          width="41"
          height="26"
          rx="2.5"
          transform="rotate(-60 2.04904 38.2536)"
          stroke="#EBEBEB"
          stroke-width="3"
        />
        <rect
          x="4.59802"
          y="36.8385"
          width="23"
          height="2"
          transform="rotate(30 4.59802 36.8385)"
          fill="#EBEBEB"
        />
        <rect
          x="24.281"
          y="3.74649"
          width="22"
          height="1"
          transform="rotate(30 24.281 3.74649)"
          fill="#EBEBEB"
          stroke="#EBEBEB"
        />
        <rect
          x="15.0257"
          y="37.6627"
          width="4"
          height="2"
          rx="1"
          transform="rotate(30 15.0257 37.6627)"
          fill="#EBEBEB"
          stroke="#EBEBEB"
        />
        <path
          d="M28.9276 7.58377L37.5879 12.5838L36.8379 13.8828C36.4237 14.6002 35.5063 14.8461 34.7889 14.4318L28.7267 10.9318C28.0092 10.5176 27.7634 9.60025 28.1776 8.88281L28.9276 7.58377Z"
          fill="#EBEBEB"
          stroke="#EBEBEB"
        />
      </svg>
    </>
  );
};
