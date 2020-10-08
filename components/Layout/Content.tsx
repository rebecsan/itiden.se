import styled from 'styled-components';
import tw from 'twin.macro';

export const Content = styled.div`
  ${tw`px-6 md:px-5`}
  max-width: 1120px;

  @media (min-width: 1120px) {
    ${tw`px-0 m-auto`}
    max-width: 1080px;
  }
`;
