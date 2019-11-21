import { NextPageContext } from 'next';
import Head from 'next/head';
import { withRouter, NextRouter } from 'next/router';
import React from 'react';
import tw from 'tailwind.macro';
import { Document } from '../components/Contentful';
import { Content, Header, HeaderContent, Page } from '../components/Layout';
import { Body, Title } from '../components/Typography';
import { Page as PageModel } from '../models';

interface PageProps {
  data?: PageModel;
  router: NextRouter;
}

const PagePage = ({ data }: PageProps) => {
  if (!data) {
    return <div>404</div>;
  }

  const { title, header, body, description } = data;

  return (
    <Page>
      <PageHeader title={title} description={description} />
      <Header role="banner">
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
      <Content role="main">
        <Body
          css={`
            ${tw`mt-4 px-4`}
          `}
        >
          <Document content={body} />
        </Body>
      </Content>
    </Page>
  );
};

PagePage.getInitialProps = async ({ query }: NextPageContext) => {
  const pages = await import('../data/data/page.json').then(m => m.default);
  const data = pages.find(p => p.slug === query.slug);
  return { data };
};

export default withRouter(PagePage);

const PageHeader: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => (
  <Head>
    <title>itiden - {title}</title>
    <meta name="Description" content={description} />
    <meta name="title" property="og:title" content={`itiden - ${title}`} />
  </Head>
);
