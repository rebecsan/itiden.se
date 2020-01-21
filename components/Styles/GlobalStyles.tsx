import { createGlobalStyle } from 'styled-components';
import reboot from 'styled-reboot';
import tw from 'tailwind.macro';

export const GlobalStyles = createGlobalStyle`
  ${reboot({ black: '0, 0, 0' })}

  body {
    ${tw`font-body bg-default`}
    position: relative;
  }
  h1 {
    ${tw`mb-3 leading-tight`}
  }
  h2 {
    ${tw`text-lg mb-3 leading-tight`}
  }
  h3 {
    ${tw`text-base mb-3 leading-tight`}
  }
  a {
    ${tw`text-brand`}
    text-decoration: none;

    &:hover {
      ${tw`text-brand-light`}
      text-decoration: none;
    }
  }
`;
