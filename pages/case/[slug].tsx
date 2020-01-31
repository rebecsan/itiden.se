import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { NextPageContext } from 'next';
import Head from 'next/head';
import { withRouter, NextRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Header, Content, Page } from '../../components/Layout';
import { Media } from '../../components/Media/Media';
import { Tags } from '../../components/Tag';
import { Body, Title } from '../../components/Typography';
import { Case } from '../../models/Case';

interface CasePageProps {
  data?: Case;
  router: NextRouter;
}

const Url = styled.a`
  ${tw`font-bold`}
`;

const MediaContainer = styled.div`
  @media (min-width: 768px) {
    transform: translateY(-4rem);
  }
`;

const CasePage = ({ data }: CasePageProps) => {
  if (!data) {
    return null;
  }

  const { title, technologies, categories, description, url, media } = data;

  return (
    <Page>
      <CaseHeader {...data} />
      <Header>
        <Content role="main">
          <Title>{title}</Title>
          <Url href={url}>{url}</Url>
          <Body
            css={`
              ${tw`mt-4`}
            `}
          >
            {documentToReactComponents(description)}
          </Body>
          <div
            css={`
              ${tw`mt-8`}
            `}
          >
            <Tags tags={technologies} />
          </div>
          <div
            css={`
              ${tw`mt-2`}
            `}
          >
            <Tags tags={categories} />
          </div>
        </Content>
      </Header>
      <MediaContainer>
        {media.map(m => (
          <Media key={m.id} media={m} />
        ))}
      </MediaContainer>
    </Page>
  );
};

CasePage.getInitialProps = async ({ query }: NextPageContext) => {
  const cases = await import('../../data/data/case.json').then(m => m.default);
  const data = cases.find(c => c.slug === query.slug);
  return { data };
};

export default withRouter(CasePage);

const CaseHeader: React.FC<Case> = ({ title, description, media, slug }) => {
  const imageUrl = media[0].file.url;
  const descriptionString: string = documentToPlainTextString(description);

  return (
    <Head>
      <title>itiden - case - {title}</title>
      <meta name="Description" content={descriptionString} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@itidengbg" />
      <meta name="twitter:title" content={`itiden - case - ${title}`} />
      <meta name="twitter:description" content={descriptionString} />
      <meta name="twitter:creator" content="@itidengbg" />
      <meta name="twitter:image" content={imageUrl} />
      <meta property="og:title" content={`itiden - case - ${title}`} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={`https://itiden.se/case/${slug}`} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:description" content={descriptionString} />
      <meta property="og:site_name" content="https://itiden.se" />
    </Head>
  );
};
