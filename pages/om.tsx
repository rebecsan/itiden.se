import { NextComponentType } from 'next';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { IndexHeader } from '../components/IndexHeader';
import { AboutIconsGroup } from '../components/AboutIcons';
import { Header, Page, Content, Paragraph, Hero } from '../components/Layout';

const ContentWrapper = styled.div`
  ${tw`md:hidden`};
  padding-top: ${(props: { paddingTop: string }) => props.paddingTop};
  padding-bottom: ${(props: { paddingBottom: string }) => props.paddingBottom};
`;

const GrayBanner = styled(Hero)`
  ${tw`bg-gray-700 pt-16 pb-1 md:pt-32`}
`;

const IndexPage: NextComponentType<{}, {}> = () => {
  return (
    <Page>
      <IndexHeader title="Om" />
      <Header role="banner">
        <ContentWrapper paddingTop={'16rem'} paddingBottom={'0.5rem'}>
          <Content>
            <h3>Kunskap genom insikt och erfarenhet</h3>
            <Paragraph>
              För att ett projekt – vare sig det gäller för appar, webb eller
              andra tekniska lösningar – skall bli så bra som möjligt krävs
              insikter. Därför tycker vi det är viktigt att vara med tidigt i
              processen, gärna redan vid idéstadiet. Genom insikt och förståelse
              för dina behov anpassar vi teknik och väg framåt. Vi utgår inte
              från mallar utan skräddarsyr varje ensklit projekt för att nå
              bästa möjliga resultat. Vi jobbar transparent och under projektets
              gång är du delaktig hela vägen i produktionen fram till färdig
              produkt. På detta vis kan vi ta snabba beslut om förutsättningar
              för projektet förändras och vi kan tillsammans nå önskat resultat.
            </Paragraph>
          </Content>
        </ContentWrapper>
      </Header>
      <GrayBanner>
        <AboutIconsGroup />
      </GrayBanner>
    </Page>
  );
};

export default IndexPage;
