import React from 'react';
import Head from 'next/head';
import { Page, Header } from '../components/Layout';
import { getCases } from '../data/data';
import { CaseGrid } from '../components/Case';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { withAmp } from 'next/amp';

const cases = getCases();

const CaseWrapper = styled.div`
  transform: translateY(-4rem);
`;

const IndexPage: React.FC<{}> = () => {
  return (
    <Page>
      <IndexHeader />
      <Header>
        <Intro />
      </Header>
      <CaseWrapper>
        <CaseGrid cases={cases} />
      </CaseWrapper>
    </Page>
  );
};

export default withAmp(IndexPage, { hybrid: true });

const IntroText = styled.div`
  ${tw`text-2xl text-gray-800 font-bold tracking-wide m-auto`}
  max-width: 800px;

  & b {
    ${tw`text-primary font-bold`}
  }
`;

const Intro: React.FC<{}> = () => {
  return (
    <IntroText>
      <p>
        <b>itiden</b> är en <b>digital produktionsbyrå</b> i Göteborg som
        utvecklar <b>webbplatser</b>,<b>tjänster</b>, <b>webbapplikationer</b>{' '}
        och <b>mobilappar</b> tillsammans med kommunikationsbyråer och
        teknikföretag inom många olika branscher. Dessutom är vi{' '}
        <b>techpartner</b> i några spännande startups.
      </p>
      <p>
        Sugen på att jobba med oss eller har en fråga? Skicka ett mail till{' '}
        <a href="mailto: andi@itiden.se" aria-label="maila andi@itiden.se">
          andi@itiden.se
        </a>{' '}
        eller ring{' '}
        <a href="tel:0709597005" aria-label="ring 0709597005">
          0709-597005
        </a>
        .
      </p>
    </IntroText>
  );
};

const IndexHeader: React.FC<{}> = () => (
  <Head>
    <title>
      itiden - utvecklar webbplatser, tjänster, webbapplikationer och mobilappar
      i Göteborg
    </title>
    <meta
      name="Description"
      content="itiden är en digital produktionsbyrå som utvecklar webbplatser, tjänster, webbapplikationer och mobilappar tillsammans med kommunikationsbyråer och teknikföretag inom många olika branscher. Dessutom är vi techpartner i några spännande startups."
    />
    <link rel="canonical" href="https://itiden.se" />
  </Head>
);
