import React from 'react';
import Head from 'next/head';
import { Page, Header, HeaderContent } from '../components/Layout';
import { getCases } from '../data/case';
import { getPage } from '../data/page';
import { CaseGrid } from '../components/Case';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { UANextWrapper } from '../components/UAParser';

const cases = getCases();
const page = getPage('/');

const CaseWrapper = styled.div`
  @media (min-width: 768px) {
    transform: translateY(-4rem);
  }
`;

const IndexPage: React.FC<{}> = () => {
  if (!page) {
    return null;
  }

  return (
    <Page>
      <IndexHeader />
      <Header>
        <IntroText>{documentToReactComponents(page.header)}</IntroText>
      </Header>
      <CaseWrapper>
        <CaseGrid cases={cases} />
      </CaseWrapper>
    </Page>
  );
};

// export default IndexPage;
export default UANextWrapper(IndexPage);

const IntroText = styled(HeaderContent)`
  ${tw`text-lg md:text-2xl text-primary font-bold tracking-wide`}

  & b {
    ${tw`text-brand font-bold`}
  }
`;

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
