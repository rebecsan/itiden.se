import { createGlobalStyle } from 'styled-components';
import reboot from 'styled-reboot';
import tw from 'tailwind.macro';

export const GlobalStyles = createGlobalStyle`
  ${reboot({ black: '0, 0, 0' })}

  body {
    ${tw`bg-gray-800 text-gray-300 font-body relative`}
  }
  h1 {
    ${tw`mb-3 leading-tight text-2xl sm:text-4xl lg:text-5xl text-gray-300 font-normal leading-relaxed`}
  }
  h2 {
    ${tw`text-h2 text-gray-200 font-bold`}
  }
  h3 {
    ${tw`text-h3 text-gray-200 font-bold`}
  }
  h4 {
    ${tw`text-h4 text-gray-200 font-semibold underline`}
  }
  a {
    ${tw`underline`}
  }
`;
