import React from 'react';
import Head from 'next/head';
import { Page, Header, Content } from '../components/Layout';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { NextComponentType } from 'next';
import { CaseGrid } from '../components/Case';
import { Case } from '../models';

interface IndexPageProps {
  cases: Case[];
}

const IndexPage: NextComponentType<{}, {}, IndexPageProps> = ({ cases }) => {
  return (
    <Page>
      <IndexHeader />
      <Header role="banner">
        <IntroText>
          <h3>Labs, itiden</h3>
          <h1>Utveckling + nöje</h1>
          <p>
            Det händer ibland att vi bygger egna produkter eller tjänster på
            itiden. Det kan vara för att utmana oss, lära oss nya tekniker eller
            helt enkelt för att vi tycker produkten behövs. Denna utveckling
            samlar vi under vad vi kallar Itiden Labs.
          </p>
        </IntroText>
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
  & h1 {
    ${tw`text-2xl md:text-3xl text-secondary tracking-wide`}
  }
`;

const IndexHeader: React.FC<{}> = () => (
  <Head>
    <title>itiden - Webbutveckling | Apputveckling | Göteborg</title>
    <meta
      name="Description"
      content="itiden är en digital produktionsbyrå specialiserade på webbutveckling och apputveckling i Göteborg som hjälper våra kunder utveckla webbplatser, webbapplikationer och mobilappar."
    />
    <meta
      name="title"
      property="og:title"
      content="itiden - Webbutveckling | Apputveckling | Göteborg"
    />
    <meta name="image" property="og:image" content="/static/itiden-share.png" />
    <link rel="canonical" href="https://itiden.se" />
  </Head>
);
