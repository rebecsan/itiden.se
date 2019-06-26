import React from 'react';
import styled from 'styled-components';
import routes from '../../routes';
import { NavLink } from '../Navigation/NavLink';
import tw from 'tailwind.macro';
import { Logo } from '../Logo';
import { animated, useSpring } from 'react-spring';
import { menu } from '../../data/menu';

const { Link } = routes;

const Wrapper = styled.div`
  ${tw`bg-header`};
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
  position: fixed;
  top: 0;
  z-index: 1000;
  overflow: hidden;
`;

const ModeBg = styled.div`
  height: 100%;
  padding-bottom: 100%;
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
  // const [animProps, setAnimProps] = useSpring(() => ({
  //   opacity: 0,
  //   height: 0,
  //   width: 0,
  //   borderRadius: 200,
  // }));
  // const modeRef = React.useRef<HTMLDivElement | null>(null);

  // const toggleDarkMode = async () => {
  //   const isDarkMode = document.documentElement.classList.contains('dark-mode');
  //   const size = Math.max(window.innerWidth, window.innerHeight);
  //   if (modeRef.current) {
  //     modeRef.current.style.background = isDarkMode ? '#fff' : '#1A1A1A';
  //   }
  //   setAnimProps({
  //     to: async next => {
  //       await next({ opacity: 1, height: size, width: size, borderRadius: 0 });
  //       setDarkMode(isDarkMode);
  //       await next({ opacity: 0 });
  //       await next({
  //         height: 0,
  //         width: 0,
  //         borderRadius: 200,
  //         config: { immediate: true },
  //       });
  //     },
  //   });
  // };

  return (
    <>
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
            {menu.map(item => (
              <NavLink key={item.id} href={`/${item.slug}`} prefetch passHref>
                {item.label}
              </NavLink>
            ))}
          </Menu>
        </Content>
      </Wrapper>
    </>
  );
};
