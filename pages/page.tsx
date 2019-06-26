import { withAmp } from 'next/amp';
import Head from 'next/head';
import { withRouter, WithRouterProps } from 'next/router';
import React from 'react';
import tw from 'tailwind.macro';
import { Document } from '../components/Contentful';
import { Content, Header, HeaderContent, Page } from '../components/Layout';
import { Body, Title } from '../components/Typography';
import { getPage } from '../data/page';

interface PageRouterProps {
  slug: string;
}

const PagePage: React.FC<WithRouterProps<PageRouterProps>> = props => {
  const { slug = '' } = (props.router && props.router.query) || {};
  const page = getPage(slug);

  if (!page) {
    return <div>404</div>;
  }

  const { title, header, body } = page;

  return (
    <Page>
      <PageHeader title={title} />
      <Header>
        <HeaderContent>
          <Title>{title}</Title>
          <Body
            css={`
              ${tw`mt-4`}
            `}
          >
            <Document content={header} />
          </Body>
        </HeaderContent>
      </Header>
      <Content>
        <Body
          css={`
            ${tw`mt-4`}
          `}
        >
          <Document content={body} />
        </Body>
      </Content>
    </Page>
  );
};

export default withAmp(withRouter(PagePage), { hybrid: true });

const PageHeader: React.FC<{ title: string }> = ({ title }) => (
  <Head>
    <title>itiden - {title}</title>
    <meta
      name="Description"
      content="Sugen på att jobba med oss eller har en fråga? Skicka ett mail till andi@itiden.se eller ring 0709-597005"
    />
  </Head>
);
