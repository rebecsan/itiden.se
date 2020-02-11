import React from 'react';
import Head from 'next/head';
import { Page, Header, Content } from '../components/Layout';
import { NextComponentType } from 'next';

const IndexPage: NextComponentType = () => {
  return (
    <Page>
      <IndexHeader />
      <Header role="banner">
        <Content>
          <h3>Jobba hos oss</h3>
          <h1>Tackar!</h1>
          <p>
            Vi har nu mottagit din ansökan och kommer gå igenom den och
            återkomma snarast.
          </p>
          <p>
            Har du några frågor eller funderingar är du välkommen att kontakta{' '}
            <a href="mailto:jobb@itiden.se">jobb@itiden.se</a>
          </p>
        </Content>
      </Header>
    </Page>
  );
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
