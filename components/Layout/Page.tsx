import React from 'react';
import { Header } from '../Header';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Analytics } from '../Analytics';
import { Footer } from './Footer';

const Wrapper = styled.main`
  ${tw`mx-auto flex-grow`}
`;
const OuterWrapper = styled.main`
  ${tw`flex flex-col min-h-screen`}
`;

const Content = styled.div``;

export const Page: React.FC<{}> = props => {
  return (
    <>
      <Header />
      <Analytics />
      <OuterWrapper>
        <Wrapper>
          <Content>{props.children}</Content>
        </Wrapper>
        <Footer />
      </OuterWrapper>
    </>
  );
};
