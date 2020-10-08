import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Link from 'next/link';
import { Logo } from '../Logo';
import { LogoFnutt } from '../LogoFnutt';
import { NavLink } from '../Navigation/NavLink';
// import { Search } from '../Search';
// import { VisuallyHidden } from '../Helpers/VisuallyHidden';

interface HeaderProps {
  noLogoFnutt?: boolean;
}

const HeaderWrapper = styled.div`
  z-index: 1;
  ${tw`w-full bg-gray-800 bg-opacity-90 md:fixed`}
`;

const Content = styled.div`
  ${tw`flex px-6 md:px-5 lg:px-0 lg:m-auto items-center justify-center flex-col md:flex-row md:justify-between md:items-baseline flex-wrap pt-6 sm:pt-5`};
  max-width: 1080px;

  @media (max-width: 479px) {
    ${tw`pt-0`}
  }

  @media (max-width: 767px) {
    height: ${(props: { noLogoFnutt: boolean; }) => props.noLogoFnutt ? '0px' : '80px'};
  }

  @media (min-width: 1080px) {
    max-width: 1040px;
  }
`;

const Menu = styled.nav`
  width: 33%;
  display: flex;
  justify-content: space-between;
  z-index: 1;

  @media (max-width: 767px) {
    ${tw`bg-gray-900 px-12 md:px-4 border-solid border-0 border-t border-purple-700`};
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    z-index: 999;
  }
`;

const HeaderLogo = styled(Logo)`
  ${tw`hidden md:block md:mx-auto h-8 fill-current text-gray-200`};
`;

const HeaderLogoFnutt = styled(LogoFnutt)`
  ${tw`block md:hidden h-20 absolute top-0`};
  left: 24px;
`;

export const Header: React.FC<HeaderProps> = props => {
  // const [showSearch, setShowSearch] = React.useState(false);

  // function handleSearchClick() {
  //   setShowSearch(true);
  // }

  // function handleSearchCloseRequest() {
  //   setShowSearch(false);
  // }

  return (
    <HeaderWrapper>
      <Content noLogoFnutt={props.noLogoFnutt} role="complementary">
        <Link href="/">
          <a aria-label="itiden.se">
            <HeaderLogo />
            { !props.noLogoFnutt && 
              <HeaderLogoFnutt />
            }
          </a>
        </Link>
        <Menu>
          <MenuItem key="home" label="Hem" href="/" />
          <MenuItem key="case" label="Case" href="/case" />
          <MenuItem key="om" label="Om" href="/om" />
          <MenuItem key="kontakt" label="Kontakt" href="/kontakt" />
        </Menu>
      </Content>
      {/* <Search show={showSearch} onRequestClose={handleSearchCloseRequest} /> */}
    </HeaderWrapper>
  );
};

const MenuItem: React.FC<{ label: string; href: string }> = ({
  label,
  href,
}) => {
  return (
    <NavLink href={href} passHref>
      {label}
    </NavLink>
  );
};

// const SearchButton = styled.button`
//   ${tw`p-4 text-xl bg-transparent outline-none focus:outline-none border-0`}

//   & svg {
//     ${tw`fill-secondary relative`}
//     top: -2px;
//     height: 24px;
//   }

//   &:hover svg,
//   &:focus svg {
//     ${tw`fill-brand`}
//   }
// `;

// function SearchIcon({ onClick }: { onClick(): void }) {
//   return (
//     <SearchButton onClick={onClick}>
//       <VisuallyHidden as="span">Sök</VisuallyHidden>
//       <svg aria-hidden xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//         <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
//       </svg>
//     </SearchButton>
//   );
// }
