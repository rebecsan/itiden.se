import React from 'react';
import Head from 'next/head';
import { Page, Header, Content } from '../components/Layout';
import { CaseGrid } from '../components/Case';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { NextComponentType } from 'next';
import { Case, Page as PageModel } from '../models';
import Link from 'next/link';

interface IndexPageProps {
  cases: Case[];
  page: PageModel | undefined;
}

const Section = styled.div`
  ${tw`bg-brand-light pt-6 pb-12 md:pb-32 md:pt-20 mb-24`};
`;

const IndexPage: NextComponentType<{}, {}, IndexPageProps> = ({ cases }) => {
  return (
    <Page>
      <IndexHeader />
      <Header role="banner">
        <IntroText>
          <h3>Göteborg, kungsportsplatsen</h3>
          <h1>Webbutveckling och Apputveckling</h1>
          <p>
            itiden är en digital produktionsbyrå specialiserade på
            webbutveckling och apputveckling i Göteborg. Vi hjälper våra kunder
            att utveckla webbplatser, webbapplikationer och mobilappar.
          </p>
          <p>
            Dessutom är itiden techpartner i spännande startups där vi hjälper
            till med arkitektur, servrar, front-end, back-end, UX och design.
          </p>
          <p>
            <Link href="/kontakt">Kontakta oss</Link>
          </p>
        </IntroText>
      </Header>
      <Section>
        <Content>
          <h2>Teknisk kreativitet</h2>
        </Content>
      </Section>
      <Content role="main">
        <h2>Se vad vi gör</h2>
        <CaseGrid cases={cases} />
        <p>
          <Link href="/case">Visa fler</Link>
        </p>
      </Content>
    </Page>
  );
};

IndexPage.getInitialProps = async () => {
  const cases = await import('../data/data/case.json').then(m => m.default);
  return { cases: cases.filter(c => c.showOnStartpage) };
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
