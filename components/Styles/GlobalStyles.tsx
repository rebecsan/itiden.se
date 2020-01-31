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
    ${tw`text-4xl mb-3 leading-tight uppercase`}
  }
  h2 {
    ${tw`text-4xl mb-3 leading-tight uppercase`}
  }
  h3 {
    ${tw`text-base mb-3 leading-tight font-normal uppercase`}
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
