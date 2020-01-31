import { withRouter, NextRouter } from 'next/router';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

interface NavLinkProps {
  href: string;
  as: string;
  children: string;
  prefetch?: boolean;
  passHref?: boolean;
  router: NextRouter;
}

const Wrapper = styled.a<{ active: boolean }>`
  ${tw`py-5 px-3 md:px-4 inline-block text-secondary text-base hover:text-brand outline-none focus:text-brand uppercase`};
  ${({ active }) => active && tw`font-bold`};
  text-decoration: none;
  transition: color 0.2s;
`;

export const NavLink = withRouter<NavLinkProps, {}>(
  ({ children, router, ...rest }) => {
    const active: boolean = router
      ? router.route === rest.as ||
        router.asPath === rest.as ||
        router.asPath === `${rest.as}/`
      : false;

    return (
      <Link {...rest}>
        <Wrapper active={active}>{children}</Wrapper>
      </Link>
    );
  }
);
