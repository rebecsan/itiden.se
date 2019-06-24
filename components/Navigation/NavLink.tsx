import { withRouter } from 'next/router';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

interface NavLinkProps {
  href: string;
  router?: any;
  children: string;
  prefetch: boolean;
  passHref: boolean;
}

const Wrapper = styled.a<{ active: boolean }>`
  ${tw`p-4 inline-block font-light text-gray-700 text-2xl hover:text-primary-light`};
  ${({ active }) => active && tw`font-bold`};
`;

export const NavLink = withRouter<NavLinkProps>(
  ({ children, router, ...rest }) => {
    const active: boolean =
      router.route === rest.href ||
      router.asPath === rest.href ||
      (router.route === '/case' && rest.href === '/');

    return (
      <Link {...rest}>
        <Wrapper active={active}>{children}</Wrapper>
      </Link>
    );
  }
);
