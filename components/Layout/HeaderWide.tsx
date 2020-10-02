import styled from 'styled-components';
import tw from 'twin.macro';

export const HeaderWide = styled.div`
  ${tw`flex flex-col justify-center h-screen md:pt-48 -mt-10`}
  

  @media (max-width: 767px) {
    ${tw`justify-end`}
    margin-top: -183px;
  }
  & p {
    ${tw`w-full md:w-3/4 lg:w-3/5`}
  }
`;
