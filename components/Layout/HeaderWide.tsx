import styled from 'styled-components';
import tw from 'twin.macro';

export const HeaderWide = styled.div`
  ${tw`flex flex-col justify-center`}
  height: 100vh;
  margin-top: -85px;
  @media (max-width: 767px) {
    justify-content: flex-end;
    margin-top: -143px;
  }
  & p {
    ${tw`w-full md:w-3/4 lg:w-3/5`}
  }
`;
