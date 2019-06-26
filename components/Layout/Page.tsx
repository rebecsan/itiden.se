import React from 'react';
import { Header } from '../Header';
import styled from 'styled-components';
import tw from 'tailwind.macro';
// import Analytics from '../components/Analytics';
import { GlobalStyles } from '../Styles';

const Wrapper = styled.div`
  ${tw`mx-auto pb-32`}
`;

const Content = styled.div``;

export const Page: React.FC<{}> = props => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Wrapper>
        <Content>{props.children}</Content>
      </Wrapper>
    </>
  );
};
