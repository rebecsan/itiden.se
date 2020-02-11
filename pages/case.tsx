import { NextComponentType } from 'next';
import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { CaseGrid } from '../components/Case';
import { IndexHeader } from '../components/IndexHeader';
import { Content, Header, Page } from '../components/Layout';
import { Case } from '../models';

interface IndexPageProps {
  cases: Case[];
}

const IndexPage: NextComponentType<{}, {}, IndexPageProps> = ({ cases }) => {
  return (
    <Page>
      <IndexHeader title="Case" />
      <Header role="banner">
        <IntroText>
          <h3>Case, itiden</h3>
          <h1>Vad vi gör</h1>
          <p>
            Tillsammans med IT-bolag, reklambyråer, start-ups och produktbolag
            hjälper vi att utveckla hemsidor, webbapplikationer och mobilappar.
          </p>
        </IntroText>
      </Header>
      <CaseGrid cases={cases.filter(c => !c.labs)} />
    </Page>
  );
};

IndexPage.getInitialProps = async () => {
  const cases = await import('../data/data/case.json').then(m => m.default);
  return { cases: cases.filter(c => !c.labs) };
};

export default IndexPage;

const IntroText = styled(Content)`
  ${tw`text-secondary tracking-wide`}
  & p {
    ${tw`md:mr-24 clearfix`}
  }
  & b {
    ${tw`font-bold text-primary`}
  }
  & a {
    ${tw`inline-block bg-brand text-white py-2 px-8 rounded-full`}
  }
`;
