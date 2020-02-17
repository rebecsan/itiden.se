import styled from 'styled-components';
import tw from 'tailwind.macro';

export const HeaderWide = styled.div`
  ${tw`pt-6 pb-12 md:pb-32 md:pt-56`}
  & p {
    ${tw`w-full md:w-3/4 lg:w-3/5`}
  }
`;
