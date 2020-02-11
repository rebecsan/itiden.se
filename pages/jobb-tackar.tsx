import React from 'react';
import { Page, Header, Content } from '../components/Layout';
import { NextComponentType } from 'next';
import { IndexHeader } from '../components/IndexHeader';

const IndexPage: NextComponentType = () => {
  return (
    <Page>
      <IndexHeader title="Tackar!" />
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
