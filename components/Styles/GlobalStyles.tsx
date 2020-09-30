import { createGlobalStyle } from 'styled-components';
import reboot from 'styled-reboot';
import tw from 'twin.macro';

export const GlobalStyles = createGlobalStyle`
  ${reboot({ black: '0, 0, 0' })}

  body {
    ${tw`bg-gray-800 text-gray-300 font-body relative`}
  }
  h1 {
    ${tw`text-5xl`}
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
