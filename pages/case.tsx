import { NextComponentType } from 'next';
import React from 'react';
import { CaseGrid } from '../components/Case';
import { IndexHeader } from '../components/IndexHeader';
import { Header, Page, Content } from '../components/Layout';
import { Case } from '../models';

interface IndexPageProps {
  cases: Case[];
}

const IndexPage: NextComponentType<{}, {}, IndexPageProps> = ({ cases }) => {
  return (
    <Page>
      <IndexHeader title="Case" />
      <Header role="banner">
        <Content>
          <h3>Case, Itiden</h3>
          <h1>Vad vi gör</h1>
          <p>
            Tillsammans med IT-bolag, reklambyråer, start-ups och produktbolag
            hjälper vi att utveckla hemsidor, webbapplikationer och mobilappar.
          </p>
        </Content>
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
