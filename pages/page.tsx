import {
  documentToReactComponents,
  Options,
} from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { withAmp } from 'next/amp';
import Head from 'next/head';
import React from 'react';
import tw from 'tailwind.macro';
import { Header, HeaderContent, Page, Content } from '../components/Layout';
import { Body, Title } from '../components/Typography';
import { getPage } from '../data/page';
import {
  getEmbeddedContentType,
  getEmbeddedFields,
} from '../helpers/contentHelpers';
import { Employee } from '../models/Employee';
import { ProfileCard } from '../components/ProfileCard';
import { withRouter, WithRouterProps } from 'next/router';

interface PageRouterProps {
  slug: string;
}

const documentOptions: Options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ENTRY]: node => {
      if (getEmbeddedContentType(node) === 'employee') {
        const data = getEmbeddedFields<Employee>(node);
        return <ProfileCard {...data} />;
      }

      return null;
    },
  },
};

const PagePage: React.FC<WithRouterProps<PageRouterProps>> = props => {
  const { slug = '' } = (props.router && props.router.query) || {};
  const page = getPage(slug);
  if (!page) {
    return '404';
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
            {documentToReactComponents(header, documentOptions)}
          </Body>
        </HeaderContent>
      </Header>
      <Content>
        <Body
          css={`
            ${tw`mt-4`}
          `}
        >
          {documentToReactComponents(body, documentOptions)}
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
