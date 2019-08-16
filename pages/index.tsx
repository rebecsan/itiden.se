import React from 'react';
import Head from 'next/head';
import { Page, Header, HeaderContent } from '../components/Layout';
import { CaseGrid } from '../components/Case';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { NextComponentType } from 'next';
import { Case, Page as PageModel } from '../models';

interface IndexPageProps {
  cases: Case[];
  page: PageModel | undefined;
}

const CaseWrapper = styled.div`
  @media (min-width: 768px) {
    transform: translateY(-4rem);
  }
`;

const IndexPage: NextComponentType<{}, {}, IndexPageProps> = ({
  cases,
  page,
}) => {
  if (!page) {
    return null;
  }

  return (
    <Page>
      <IndexHeader />
      <Header>
        <IntroText>{documentToReactComponents(page.header)}</IntroText>
      </Header>
      <CaseWrapper role="main">
        <CaseGrid cases={cases} />
      </CaseWrapper>
    </Page>
  );
};

IndexPage.getInitialProps = async () => {
  const cases = await import('../data/data/case.json').then(m => m.default);
  const pages = await import('../data/data/page.json').then(m => m.default);
  const page = pages.find(p => p.slug === '/');

  return { cases, page };
};

export default IndexPage;

const IntroText = styled(HeaderContent)`
  ${tw`text-lg md:text-2xl text-secondary font-light tracking-wide`}

  & b {
    ${tw`font-bold text-primary`}
  }
  & a {
    ${tw`font-bold`}
  }

  & h1 {
    ${tw`text-lg md:text-2xl text-secondary font-light tracking-wide`}
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
    <meta
      name="title"
      property="og:title"
      content="itiden - utvecklar webbplatser, tjänster, webbapplikationer och mobilappar
      i Göteborg"
    />
    <meta name="image" property="og:image" content="/static/itiden-share.png" />
    <link rel="canonical" href="https://itiden.se" />
  </Head>
);
