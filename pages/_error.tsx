import React from 'react';
import { Page, Header, HeaderContent } from '../components/Layout';
import { getCases } from '../data/case';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { CaseGrid } from '../components/Case';

const cases = getCases();

const IntroText = styled(HeaderContent)`
  ${tw`text-lg md:text-2xl text-primary font-light tracking-wide`}

  & b {
    ${tw`font-bold text-primary`}
  }
  & a {
    ${tw`font-bold`}
  }
`;

const CaseWrapper = styled.div`
  @media (min-width: 768px) {
    transform: translateY(-4rem);
  }
`;

const ErrorPage = () => {
  return (
    <Page>
      <Header>
        <IntroText>
          <b>Ooops</b>, sidan du letade efter <b>hittades inte</b>!
        </IntroText>
        <IntroText>
          Du kanske letade efter något av våra <b>case</b>?
        </IntroText>
      </Header>
      <CaseWrapper role="main">
        <CaseGrid cases={cases} />
      </CaseWrapper>
    </Page>
  );
};

export default ErrorPage;
