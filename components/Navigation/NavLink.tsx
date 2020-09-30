import { withRouter, NextRouter } from 'next/router';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

interface NavLinkProps {
  href: string;
  children: string;
  prefetch?: boolean;
  passHref?: boolean;
  router: NextRouter;
}

const Wrapper = styled.a<{ active: boolean }>`
  ${tw`whitespace-no-wrap py-5 inline-block text-gray-100 font-light text-base outline-none hover:no-underline hover:text-teal-400 leading-snug`};
  ${({ active }: any) => active && tw`font-bold lowercase`};
  text-decoration: none;
  transition: color 0.2s;
`;

export const NavLink = withRouter<NavLinkProps, {}>(
  ({ children, router, ...rest }) => {
    const active: boolean = router ? router.route === rest.href : false;
    return (
      <Link {...rest}>
        <Wrapper active={active}>
          {active && '/'}
          {children}
        </Wrapper>
      </Link>
    );
  }
);
