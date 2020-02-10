import { createGlobalStyle } from 'styled-components';
import reboot from 'styled-reboot';
import tw from 'tailwind.macro';

export const GlobalStyles = createGlobalStyle`
  ${reboot({ black: '0, 0, 0' })}

  body {
    ${tw`font-body bg-default relative`}
  }
  h1 {
    ${tw`text-3xl mb-3 leading-tight uppercase sm:text-4xl`}
  }
  h2 {
    ${tw`text-3xl mb-3 leading-tight uppercase sm:text-4xl`}
  }
  h3 {
    ${tw`text-base mb-3 leading-tight font-normal uppercase`}
  }
  a {
    ${tw`text-brand no-underline`}
  }
`;
