import { NextComponentType } from 'next';
import React from 'react';
import { CaseGrid } from '../components/Case';
import { IndexHeader } from '../components/IndexHeader';
import { Header, Page, Content, H2 } from '../components/Layout';
import { Case } from '../models';

interface IndexPageProps {
  cases: Case[];
}

const IndexPage: NextComponentType<{}, {}, IndexPageProps> = ({ cases }) => {
  return (
    <Page>
      <IndexHeader title="Case" />
      <Header role="banner">
        <Content>
          <H2>Fin rubrik till case</H2>
          <p>
            Vi kan Ux, Html, Css, Javascript, React, React Native, Php, Laravel, Android, iOS, Mobil, Desktop, App, Webb, Next.js, CMS, TypeScript, Frontend, Backend, AR, VR, Drupal, Wordpress och mer därtill. Utmana oss gärna.
          </p>
        </Content>
      </Header>
      <CaseGrid cases={cases.filter(c => !c.labs)} />
    </Page>
  );
};

IndexPage.getInitialProps = async () => {
  const cases = await import('../data/data/case.json').then(m => m.default);
  return { cases: cases.filter(c => !c.labs) };
};

export default IndexPage;
