import {
  documentToReactComponents,
  Options,
} from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { withAmp } from 'next/amp';
import Head from 'next/head';
import React from 'react';
import tw from 'tailwind.macro';
import { Header, HeaderContent, Page } from '../components/Layout';
import { Body, Title } from '../components/Typography';
import { getPage } from '../data/data';
import {
  getEmbeddedContentType,
  getEmbeddedFields,
} from '../helpers/contentHelpers';
import { Employee } from '../models/Employee';
import { ProfileCard } from '../components/ProfileCard';

const page = getPage('kontakt');

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

const KontaktPage: React.FC<{}> = () => {
  if (!page) {
    return null;
  }

  const { title, body } = page;

  return (
    <Page>
      <KontaktHeader />
      <Header>
        <HeaderContent>
          <Title>{title}</Title>
          <Body
            css={`
              ${tw`mt-4`}
            `}
          >
            {documentToReactComponents(body, documentOptions)}
          </Body>
        </HeaderContent>
      </Header>
    </Page>
  );
};

export default withAmp(KontaktPage, { hybrid: true });

const KontaktHeader: React.FC<{}> = () => (
  <Head>
    <title>itiden - kontakta oss</title>
    <meta
      name="Description"
      content="Sugen på att jobba med oss eller har en fråga? Skicka ett mail till andi@itiden.se eller ring 0709-597005"
    />
  </Head>
);
