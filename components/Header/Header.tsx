import React from 'react';
import styled from 'styled-components';
import routes from '../../routes';
import { NavLink } from '../Navigation/NavLink';
import tw from 'tailwind.macro';

import logo from '../../static/logo.svg';

const { Link } = routes;

const Wrapper = styled.div`
  ${tw`bg-header`};
`;

const Content = styled.div`
  ${tw`flex items-center justify-between flex-wrap pt-6 px-16 mx-auto`};
  max-width: 1400px;
`;

const Menu = styled.div``;

const Logo = styled.img`
  height: 48px;

  @media (max-width: 720px) {
    height: 30px;
  }
`;

export const Header: React.FC<{}> = () => (
  <Wrapper>
    <Content>
      <Link href="/" prefetch>
        <a aria-label="itiden.se">
          <Logo src={logo} alt="itiden logo" />
        </a>
      </Link>
      <Menu>
        <NavLink href="/" prefetch passHref>
          Case
        </NavLink>
        <NavLink href="/labs" prefetch passHref>
          Labs
        </NavLink>
        <NavLink href="/kontakt" prefetch passHref>
          Kontakt
        </NavLink>
      </Menu>
    </Content>
  </Wrapper>
);
