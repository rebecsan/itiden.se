import { NextComponentType } from 'next';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Button } from '../components/Button';
import { CaseGrid } from '../components/Case';
import { IndexHeader } from '../components/IndexHeader';
import { Content, HeaderWide, Page, Section } from '../components/Layout';
import { Case, Page as PageModel } from '../models';

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

const IndexPage: NextComponentType<{}, {}, IndexPageProps> = ({ cases }) => {
  return (
    <Page>
      <IndexHeader />
      <HeaderWide role="main">
        <Content>
          <h3>Göteborg, kungsportsplatsen</h3>
          <h1>Webbutveckling och Apputveckling</h1>
          <p>
            Itiden är en digital produktionsbyrå med ett team av webbutvecklare
            och apputvecklare i Göteborg.
          </p>
          <p>
            Tillsammans med produktbolag, startups och byråer arbetar vi med
            utveckling av webbsidor, webbapplikation och mobilappar.
          </p>
          <p>
            <Link href="/kontakt" passHref>
              <Button>Kontakta oss</Button>
            </Link>
          </p>
        </Content>
      </HeaderWide>
      <Section
        left={
          <>
            <h2>Teknisk kreativitet</h2>
            <p>
              På Itiden finns det ett stort intresse för teknik och att använda
              den på bästa möjliga sätt. Dessutom har vi lång erfarenhet av
              utveckling av webbsidor, webbapplikationer och mobilappar
            </p>
            <p>
              Vi är gärna delaktiga i tekniska beslut kring plattform, teknikval
              och arkitektur. Vi använder oss av bland annat React, React
              Native, Laravel, .NET Core och WordPress.
            </p>
          </>
        }
        right={<CreativeImage src="/static/creative.svg" alt="creative" />}
      />
      <Content>
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
