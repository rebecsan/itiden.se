import React from 'react';

interface LogoProps {
  className?: string;
}

export const Facebook: React.FC<LogoProps> = props => {
  return (
    <>
      <svg
        width="15"
        height="32"
        viewBox="0 0 15 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <title>Facebook</title>
        <path
          d="M3.24316 6.1967V10.6025H0V15.9896H3.24316V32H9.90016V15.9912H14.3688C14.3688 15.9912 14.7874 13.4083 14.9903 10.5833H9.92754V6.89894C9.92754 6.34902 10.6522 5.6083 11.3704 5.6083H15V0H10.066C3.07729 0 3.24316 5.39185 3.24316 6.1967Z"
          fill="#242424"
        />
      </svg>
    </>
  );
};
