import { NextComponentType } from 'next';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { CaseGrid } from '../components/Case';
import { IndexHeader } from '../components/IndexHeader';
import { Header, Page, Content, H2, H3 } from '../components/Layout';
import { Case } from '../models';

interface IndexPageProps {
  cases: Case[];
}

const ContentWrapper = styled.div`
  padding-top: ${(props: { paddingTop: string; }) => props.paddingTop};
  padding-bottom: ${(props: { paddingBottom: string; }) => props.paddingBottom};
`;

const CaseGridWrapper = styled.div`
  ${tw`mt-12`}
`;

const Paragraph = styled.p`
  ${tw`text-lg text-gray-300 mt-1 sm:text-xl`}
`;

const IndexPage: NextComponentType<{}, {}, IndexPageProps> = ({ cases }) => {
  return (
    <Page>
      <IndexHeader title="Case" />
      <Header role="banner">
        <ContentWrapper paddingTop={'16rem'} paddingBottom={'0.5rem'}>
          <Content>
            <H2>Fin rubrik till case</H2>
            <Paragraph>
              Vi kan Ux, Html, Css, Javascript, React, React Native, Php, Laravel, Android, iOS, Mobil, Desktop, App, Webb, Next.js, CMS, TypeScript, Frontend, Backend, AR, VR, Drupal, Wordpress och mer därtill. Utmana oss gärna.
            </Paragraph>
          </Content>
        </ContentWrapper>
      </Header>
      <CaseGrid cases={cases.filter(c => !c.labs)} />
      <ContentWrapper paddingTop={'8rem'} paddingBottom={'0.5rem'}>
        <Content>
          <H3>Itiden Lab</H3>
          <Paragraph>
            Det händer ibland att vi bygger egna produkter eller tjänster. Det kan vara för att utmana oss, lära oss nya tekniker eller helt enkelt för att vi tycker produkten behövs. Denna utveckling samlar vi under vad vi kallar Itiden Lab.
          </Paragraph>
        </Content>
      </ContentWrapper>
      <CaseGridWrapper>
        <CaseGrid cases={cases.filter(c => c.labs)} />
      </CaseGridWrapper>
    </Page>
  );
};

IndexPage.getInitialProps = async () => {
  const cases = await import('../data/data/case.json').then(m => m.default);
  return { cases };
};

export default IndexPage;
