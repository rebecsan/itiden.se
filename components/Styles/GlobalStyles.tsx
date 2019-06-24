import { createGlobalStyle } from 'styled-components';
import reboot from 'styled-reboot';
import tw from 'tailwind.macro';

export const GlobalStyles = createGlobalStyle`
  ${reboot()}
  body {
    ${tw`font-body bg-white`}
  }
  h2 {
    margin-bottom: 0.2rem;
  }
  a {
    ${tw`text-primary`}
    text-decoration: none;

    &:hover {
      ${tw`text-primary-light`}
      text-decoration: none;
    }
  }
`;
