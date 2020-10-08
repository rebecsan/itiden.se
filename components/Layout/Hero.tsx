import styled from 'styled-components';
import tw from 'twin.macro';

export const Hero = styled.div`
  ${tw`flex justify-center w-full text-gray-600`}

  & p {
    ${tw`mb-0`}
  }
`;
