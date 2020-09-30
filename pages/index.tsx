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

const ContentWrapper = styled.div`
  ${tw`bg-gray-600`}
`;

const ContentCentered = styled.div`
  text-align: center;
  ${tw`pt-24 pb-16 md:py-24 lg:mx-48`}
  & p {
    ${tw`text-lg text-gray-300 mt-6 sm:text-2xl`}
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
      <ContentWrapper>
        <Content>
          <ContentCentered>
            <h3>Teknisk kreativitet</h3>
            <p>
              Kärnan i vår verksamhet kommer från vårt stora intresse för teknik och innovation. Vi jobbar med många olika språk och ramverk och håller oss ständigt uppdaterade i detta snabbt utvecklande landskap. För dig som kund innebär det att vi har insikten och kunskapen som krävs för att kunna välja rätt väg framåt för varje enskilt projekt.
            </p>
          </ContentCentered>
        </Content>
      </ContentWrapper>
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
