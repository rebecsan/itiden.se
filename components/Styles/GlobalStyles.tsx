import { createGlobalStyle } from 'styled-components';
import reboot from 'styled-reboot';
import tw from 'tailwind.macro';

export const GlobalStyles = createGlobalStyle`
  ${reboot({ black: '0, 0, 0' })}

  body {
    ${tw`bg-gray-800 font-body relative`}
  }
  h1 {
    ${tw`mb-3 leading-tight sm:text-4xl lg:text-5xl text-gray-300 font-normal leading-relaxed`}
  }
  h2 {
    ${tw`text-3xl mb-3 leading-tight uppercase sm:text-4xl`}
  }
  h3 {
    ${tw`text-base mb-3 leading-tight font-normal uppercase`}
  }
  a {
    ${tw`text-brand no-underline hover:text-brand text-white`}
  }
`;
