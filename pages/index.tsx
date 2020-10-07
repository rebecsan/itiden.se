import { NextComponentType } from 'next';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Button } from '../components/Button';
import { CaseGrid } from '../components/Case';
import { IndexHeader } from '../components/IndexHeader';
import { Content, HeaderWide, Page, H1, H3, Paragraph } from '../components/Layout';
import { Tags } from '../components/Tag';
import { Case, Page as PageModel } from '../models';

interface IndexPageProps {
  cases: Case[];
  page: PageModel | undefined;
}

const ContentWrapperGray = styled.div`
  ${tw`bg-gray-600 pt-24 pb-16 md:py-24`}
`;

const ContentWrapperPurple = styled.div`
  ${tw`bg-purple-700 py-10`}
`;

const ContentCentered = styled.div`
  text-align: center;
  ${tw`lg:mx-48`}
  & a {
    ${tw`text-gray-100 text-lg sm:text-xl sm:font-semibold`}
  }
`;

const ParagraphCentered = styled.p`
  ${tw`mb-0`}
  text-align: center;
`;

const TagsWrapper = styled.div`
  ${tw`w-full my-10 hidden sm:block`};
`;

const Arrow = styled.div`
  ${tw`sm:hidden flex justify-center mb-6`}
`;

const CaseWrapper = styled.div`
  ${tw`mt-24 md:mt-20`}

  & p {
    ${tw`mb-32`}
  }
`;

const IndexPage: NextComponentType<{}, {}, IndexPageProps> = ({ cases }) => {
  return (
    <Page>
      <IndexHeader />
      <HeaderWide role="main">
        <Content>
          <H1>
            Vi kan kod. Vi kan också så mycket annat. Med över 20 års erfarenhet
            av strategi, ux och teknik hjälper vi på Itiden dig nå rätt lösning.
          </H1>
          <TagsWrapper>
            <Tags
              tags={[
                'Digital byrå',
                'Webb',
                'App',
                'Utveckling',
                'Produktion',
                'Centrala Göteborg',
              ]}
            />
          </TagsWrapper>
          <Link href="/kontakt" passHref>
            <Button>Kontakta oss</Button>
          </Link>
          <Arrow>
            <img src="/static/arrow.svg" alt="Pil" />
          </Arrow>
        </Content>
      </HeaderWide>
      <ContentWrapperGray>
        <Content>
          <ContentCentered>
            <H3>Teknisk kreativitet</H3>
            <Paragraph>
              Kärnan i vår verksamhet kommer från vårt stora intresse för teknik
              och innovation. Vi jobbar med många olika språk och ramverk och
              håller oss ständigt uppdaterade i detta snabbt utvecklande
              landskap. För dig som kund innebär det att vi har insikten och
              kunskapen som krävs för att kunna välja rätt väg framåt för varje
              enskilt projekt.
            </Paragraph>
          </ContentCentered>
        </Content>
      </ContentWrapperGray>
      <ContentWrapperPurple>
        <Content>
          <ContentCentered>
            <Link href="/case" passHref>
              Läs mer om hur vi jobbar
            </Link>
          </ContentCentered>
        </Content>
      </ContentWrapperPurple>
      <CaseWrapper>
      <Content>
      <H3>Case</H3>
      <CaseGrid cases={cases} />
        <ParagraphCentered>
          <Link href="/case" passHref>
            <Button>Gå till Case</Button>
          </Link>
        </ParagraphCentered>
      </Content>
      </CaseWrapper>
    </Page>
  );
};

IndexPage.getInitialProps = async () => {
  const cases = await import('../data/data/case.json').then(m => m.default);
  return { cases: cases.filter(c => c.showOnStartpage) };
};

export default IndexPage;
