import { createGlobalStyle } from 'styled-components';
import reboot from 'styled-reboot';
import tw from 'tailwind.macro';

export const GlobalStyles = createGlobalStyle`
  ${reboot({ black: '0, 0, 0' })}

  body {
    background: linear-gradient(180deg, #F5F8FF 0%, rgba(239, 243, 243, 0) 100%);
    background-repeat: no-repeat;
    background-size: 100% 100vh;
    ${tw`bg-gradient font-body relative`}
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
    ${tw`text-brand no-underline hover:text-brand`}
  }
`;
