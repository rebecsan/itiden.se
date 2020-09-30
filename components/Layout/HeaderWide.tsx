import styled from 'styled-components';
import tw from 'twin.macro';

export const HeaderWide = styled.div`
  ${tw`flex flex-col justify-center`}
  height: 100vh;
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-top: -143px;
  }
  & p {
    ${tw`w-full md:w-3/4 lg:w-3/5`}
  }
`;
