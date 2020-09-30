import { NextComponentType } from 'next';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Button } from '../components/Button';
import { CaseGrid } from '../components/Case';
import { IndexHeader } from '../components/IndexHeader';
import { Content, HeaderWide, Page, Section } from '../components/Layout';
import { Tags } from '../components/Tag';
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

const TagsWrapper = styled.div`
  ${tw`w-full my-10 hidden sm:block`};
`;

const Arrow = styled.div`
  ${tw`sm:hidden flex justify-center mb-6`}
`;

const IndexPage: NextComponentType<{}, {}, IndexPageProps> = ({ cases }) => {
  return (
    <Page>
      <IndexHeader />
      <HeaderWide role="main">
        <Content>
          <h1>Vi kan kod. Vi kan också så mycket annat. Med över 20 års erfarenhet av strategi, ux och teknik hjälper vi på Itiden dig nå rätt lösning.</h1>
          <TagsWrapper>
            <Tags tags={["Digital byrå", "Webb", "App", "Utveckling", "Produktion", "Centrala Göteborg"]} />
          </TagsWrapper>
          <Link href="/kontakt" passHref>
            <Button>Kontakta oss</Button>
          </Link>
        <Arrow>
          <img src="/static/arrow.svg" alt="Pil" />
        </Arrow>
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
