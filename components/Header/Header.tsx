import React from 'react';
import styled from 'styled-components';
import routes from '../../routes';
import { NavLink } from '../Navigation/NavLink';
import tw from 'tailwind.macro';
import { Logo } from '../Logo';
import { animated, useSpring } from 'react-spring';

const { Link } = routes;

const Wrapper = styled.div`
  ${tw`bg-header`};
  transition: background 0.2s;
`;

const Content = styled.div`
  ${tw`flex items-center justify-between flex-wrap pt-6 px-16 mx-auto`};
  max-width: 1400px;
`;

const Menu = styled.div``;

const DarkMode = styled.button`
  width: 40px;
  height: 40px;
  background: green;
`;

const ModeOverlay = styled(({ darkMode, ...rest }) => (
  <animated.div {...rest} />
))`
  //${tw`fixed bg-bg-dark`}
  position: fixed;
  top: 0;
  width: 100vw;
  //opacity: 0;
  z-index: 1000;
  .dark-mode & {
    //${tw`bg-bg-light`}
  }
`;

function setDarkMode(darkMode: boolean) {
  const html = document.querySelector('html');
  if (html) {
    if (darkMode) {
      html.classList.remove('dark-mode');
    } else {
      html.classList.add('dark-mode');
    }
  }
}

export const Header: React.FC<{}> = () => {
  //const [darkMode, setDarkMode] = React.useState(false);
  const [animProps, setAnimProps] = useSpring(() => ({
    opacity: 0,
    height: 0,
  }));

  /*React.useEffect(() => {
    const html = document.querySelector('html');
    if (html) {
      if (darkMode) {
        html.classList.remove('dark-mode');
      } else {
        html.classList.add('dark-mode');
      }
    }
  }, [darkMode]);*/

  const toggleDarkMode = async () => {
    const isDarkMode = document.documentElement.classList.contains('dark-mode');
    setAnimProps({
      to: async next => {
        await next({ opacity: 1, height: window.innerHeight });
        setDarkMode(isDarkMode);
        await next({ opacity: 0, height: 0 })
      }
    });
    //setDarkMode(current => !current)
  };

  return (
    <>
      <ModeOverlay style={animProps} />
      <Wrapper>
        <Content>
          <Link href="/" prefetch>
            <a aria-label="itiden.se">
              <Logo />
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
            <DarkMode onClick={toggleDarkMode} />
          </Menu>
        </Content>
      </Wrapper>
    </>
  );
};
