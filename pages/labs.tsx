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
      <IndexHeader title="Labs" />
      <Header role="banner">
        <Content>
          <h3>Labs, itiden</h3>
          <h1>Utveckling + nöje</h1>
          <p>
            Det händer ibland att vi bygger egna produkter eller tjänster på
            itiden. Det kan vara för att utmana oss, lära oss nya tekniker eller
            helt enkelt för att vi tycker produkten behövs. Denna utveckling
            samlar vi under vad vi kallar Itiden Labs.
          </p>
        </Content>
      </Header>
      <CaseGrid cases={cases.filter(c => c.labs)} />
    </Page>
  );
};

IndexPage.getInitialProps = async () => {
  const cases = await import('../data/data/case.json').then(m => m.default);
  return { cases: cases.filter(c => c.labs) };
};

export default IndexPage;
