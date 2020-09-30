import styled from 'styled-components';
import tw from 'twin.macro';

export const Header = styled.div`
  ${tw`pt-6 pb-12 md:pb-12 md:pt-24`}
  & p {
    ${tw`w-full md:w-3/4 lg:w-3/5`}
  }
`;
