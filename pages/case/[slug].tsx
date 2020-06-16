import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { NextPageContext } from 'next';
import Head from 'next/head';
import { withRouter, NextRouter } from 'next/router';
import React from 'react';
import tw from 'tailwind.macro';
import { Header, Content, Page } from '../../components/Layout';
import { Media } from '../../components/Media/Media';
import { Tags } from '../../components/Tag';
import { Case } from '../../models/Case';

interface CasePageProps {
  data?: Case;
  router: NextRouter;
}

const CasePage = ({ data }: CasePageProps) => {
  if (!data) {
    return null;
  }

  const {
    title,
    technologies,
    categories,
    description,
    url,
    media,
    partners,
    labs,
  } = data;

  return (
    <Page>
      <CaseHeader {...data} />
      <Header>
        <Content role="main">
          <Media media={media[0]} />
          <h3>{labs ? 'Labs' : 'Case'}, Itiden</h3>
          <h1>{title}</h1>
          {documentToReactComponents(description)}
          {url && (
            <p>
              Länk: <a href={url}>{url}</a>
            </p>
          )}
          {partners.length > 0 && (
            <p>Partners: {partners.map(partner => partner.name).join(', ')}</p>
          )}
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
      <Content>
        {media.slice(1).map(m => (
          <Media key={m.id} media={m} />
        ))}
      </Content>
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
      <title>Itiden - case - {title}</title>
      <meta name="Description" content={descriptionString} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@itidengbg" />
      <meta name="twitter:title" content={`Itiden - case - ${title}`} />
      <meta name="twitter:description" content={descriptionString} />
      <meta name="twitter:creator" content="@itidengbg" />
      <meta name="twitter:image" content={imageUrl} />
      <meta property="og:title" content={`Itiden - case - ${title}`} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={`https://www.itiden.se/case/${slug}`} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:description" content={descriptionString} />
      <meta property="og:site_name" content="https://www.itiden.se" />
    </Head>
  );
};
