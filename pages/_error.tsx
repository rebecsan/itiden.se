import React from 'react';
import { Page, Header, HeaderContent } from '../components/Layout';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { CaseGrid } from '../components/Case';
import { NextComponentType } from 'next';
import { Case } from '../models';

interface ErrorPageProps {
  cases: Case[];
}

const IntroText = styled(HeaderContent)`
  ${tw`text-lg md:text-2xl text-primary tracking-wide`}

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

const ErrorPage: NextComponentType<{}, {}, ErrorPageProps> = ({ cases }) => {
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

ErrorPage.getInitialProps = async () => {
  const cases = await import('../data/data/case.json').then(m => m.default);
  return { cases };
};

export default ErrorPage;
