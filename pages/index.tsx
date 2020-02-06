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
  ${tw`flex flex-col-reverse relative lg:flex-row mb-12 md:mb-16`};
  @media (min-width: 1024px) {
    height: 424px;
  }
`;

const HalfContent = styled.div`
  ${tw`w-full px-4 py-8 flex justify-center flex-col`};
  @media (min-width: 1024px) {
    max-width: 600px;
  }
`;

const CreativeImage = styled.img`
  @media (min-width: 1024px) {
    ${tw`ml-6`};
  }
`;

const Half = styled.div`
  ${tw`flex flex-1 justify-end bg-brand-light h-full items-center relative`};
  @media (min-width: 1024px) {
    :after {
      content: '';
      position: absolute;
      right: -120px;
      top: 0;
      width: 0;
      height: 0;
      border-left: 0 solid transparent;
      border-right: 120px solid transparent;
      border-bottom: 424px solid #f5f8ff;
      clear: both;
    }
  }
`;

const HalfGrey = styled.div`
  ${tw`flex bg-dark flex-1 h-full items-center`};
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
        <Half>
          <HalfContent>
            <h2>Teknisk kreativitet</h2>
            <p>
              Itiden är en digital produktionsbyrå med ett brinnande intresse
              för framtidens teknik och flera års erfarenhet i utveckling av
              webbplatser, webbapplikationer och mobilappar.
            </p>
          </HalfContent>
        </Half>
        <HalfGrey>
          <HalfContent>
            <CreativeImage src="/static/creative.svg" alt="creative" />
          </HalfContent>
        </HalfGrey>
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
    ${tw`md:mr-64 clearfix`}
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
