import React from 'react';
import Head from 'next/head';
import { Page, HeaderWide, Content, Section } from '../components/Layout';
import { CaseGrid } from '../components/Case';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { NextComponentType } from 'next';
import { Case, Page as PageModel } from '../models';
import Link from 'next/link';
import { Button } from '../components/Button';

interface IndexPageProps {
  cases: Case[];
  page: PageModel | undefined;
}

const CreativeImage = styled.img`
  max-width: 450px;
  ${tw`m-auto inline-block`};
  @media (min-width: 1024px) {
    ${tw`w-full max-h-full`};
  }
`;

const ParagraphCentered = styled.p`
  text-align: center;
`;

const JobPost = styled.div`
  ${tw`mb-24`};
  & p {
    ${tw`w-full md:w-3/4 lg:w-3/5`}
  }
`;

const IndexPage: NextComponentType<{}, {}, IndexPageProps> = ({ cases }) => {
  return (
    <Page>
      <IndexHeader />
      <HeaderWide role="main">
        <Content>
          <h3>Göteborg, kungsportsplatsen</h3>
          <h1>Webbutveckling och Apputveckling</h1>
          <p>
            itiden är en digital produktionsbyrå med ett team av webbutvecklare
            och apputvecklare i Göteborg.
          </p>
          <p>
            Vi jobbar tillsammans med produktbolag, startups och byråer och
            hjälper med utveckling av webbsidor, webbapplikation och mobilappar.
          </p>
          <p>
            <Link href="/kontakt" passHref>
              <Button>Kontakta oss</Button>
            </Link>
          </p>
        </Content>
      </HeaderWide>
      <JobPost>
        <Content>
          <h2>Jobba hos oss</h2>
          <p>
            Vi söker för tillfället utvecklare. Är du en webbutvecklare med god
            kunskap i HTML, CSS och JavaScript som dessutom har kunskap i eller
            är sugen på att lära dig React, Laravel, ASP.NET Core och/eller
            React Native?
          </p>
          <p>
            <Link href="/jobb-webbutvecklare" passHref>
              <a>Läs mer om tjänsten</a>
            </Link>
          </p>
        </Content>
      </JobPost>
      <Section
        left={
          <>
            <h2>Teknisk kreativitet</h2>
            <p>
              Vi har brinnande intresse för den senaste tekniken och lång
              erfarenhet av utveckling av webbsidor, webbapplikationer och
              mobilappar.
            </p>
            <p>
              Dessutom är vi ofta delaktiga i tekniska beslut kring plattform,
              teknikval och arkitektur. Vi använder oss av bland annat React,
              React Native, Laravel, ASP.NET Core och Wordpress.
            </p>
          </>
        }
        right={<CreativeImage src="/static/creative.svg" alt="creative" />}
      />
      <Content role="heading">
        <h2>Se vad vi gör</h2>
      </Content>
      <CaseGrid cases={cases} />
      <Content>
        <ParagraphCentered>
          <Link href="/case" passHref>
            <Button>Visa fler</Button>
          </Link>
        </ParagraphCentered>
      </Content>
    </Page>
  );
};

IndexPage.getInitialProps = async () => {
  const cases = await import('../data/data/case.json').then(m => m.default);
  return { cases: cases.filter(c => c.showOnStartpage) };
};

export default IndexPage;

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
  </Head>
);
