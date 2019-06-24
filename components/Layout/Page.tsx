import React from 'react';
import { Header } from '../Header';
import styled from 'styled-components';
import tw from 'tailwind.macro';
// import Analytics from '../components/Analytics';
import { GlobalStyles } from '../Styles';

const Wrapper = styled.div`
  ${tw`mx-auto`}
  /* margin-left: 300px; */
  /* max-width: 900px; */
  /* margin: 20px auto; */
  /* font-family: 'Source Sans Pro', sans-serif; */
  /* font-size: 16px; */
  /* line-height: 1.4; */

  /* @media (max-width: 900px) {
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
    box-sizing: border-box;
  } */
`;

const Content = styled.div``;

export default (props: any) => (
  <>
    <GlobalStyles />
    <Header />
    <Wrapper>
      <Content>{props.children}</Content>
    </Wrapper>
  </>
);
