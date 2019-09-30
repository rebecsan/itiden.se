import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { menu } from '../../data/menu';
import Link from 'next/link';
import { Logo } from '../Logo';
import { NavLink } from '../Navigation/NavLink';
// import { Search } from '../Search';
// import { VisuallyHidden } from '../Helpers/VisuallyHidden';

const Wrapper = styled.div`
  ${tw`bg-header`};
`;

const Content = styled.div`
  ${tw`flex items-center justify-center flex-col md:flex-row md:justify-between flex-wrap pt-6 px-4 md:px-16 mx-auto`};
  max-width: 1400px;
`;

const Menu = styled.nav``;

const HeaderLogo = styled(Logo)`
  ${tw`fill-logo sm:mx-auto`};
  height: 48px;

  @media (max-width: 768px) {
    height: 32px;
  }
`;

export const Header: React.FC<{}> = () => {
  // const [showSearch, setShowSearch] = React.useState(false);

  // function handleSearchClick() {
  //   setShowSearch(true);
  // }

  // function handleSearchCloseRequest() {
  //   setShowSearch(false);
  // }

  return (
    <>
      <Wrapper>
        <Content role="complementary">
          <Link href="/">
            <a aria-label="itiden.se">
              <HeaderLogo />
            </a>
          </Link>
          <Menu role="navigation">
            {menu.Main.map(item => (
              <MenuItem key={item.label} {...item} />
            ))}
            {/* <SearchIcon onClick={handleSearchClick} /> */}
          </Menu>
        </Content>
      </Wrapper>
      {/* <Search show={showSearch} onRequestClose={handleSearchCloseRequest} /> */}
    </>
  );
};

const MenuItem: React.FC<{ label: string; slug: string }> = ({
  label,
  slug,
}) => {
  const isRootLink: boolean = slug === '/';
  const href: string = isRootLink ? slug : `/page?slug=${slug}`;
  const as: string = isRootLink ? slug : `/${slug}`;

  return (
    <NavLink href={href} as={as} passHref>
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
