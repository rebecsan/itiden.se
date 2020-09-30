import React from 'react';

interface LogoProps {
  className?: string;
}

export const Facebook: React.FC<LogoProps> = props => {
  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <title>Facebook</title>
        <path d="M13.9589 23.8409C19.6545 22.9058 24 17.9604 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.1784 4.6692 23.2662 10.6714 23.9273V16.125H8V12.8676H10.6714V10.3847C10.6714 7.56038 12.2422 6 14.6452 6C15.7964 6 17 6.21994 17 6.21994V8.99306H15.6735C14.3664 8.99306 13.9589 9.86212 13.9589 10.7531V12.867H16.8771L16.4103 16.1244L13.9589 16.125V23.8409Z" />
      </svg>
    </>
  );
};
