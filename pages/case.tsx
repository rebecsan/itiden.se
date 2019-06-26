/// <reference types="styled-components/cssprop" />

import React from 'react';
import Head from 'next/head';
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Case } from '../models/Case';
import { getCases } from '../data/case';
import { withRouter, WithRouterProps } from 'next/router';
import { Page, Header, HeaderContent } from '../components/Layout';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Title, Body } from '../components/Typography';
import { Tag } from '../components/Tag';
import { Media } from '../components/Media/Media';

const cases = getCases();

interface CasePageRouterProps {
  slug: string;
}

const Url = styled.a`
  ${tw`font-bold`}
`;

const MediaContainer = styled.div`
  ${tw`mt-8`}
`;

const CasePage: React.FC<WithRouterProps<CasePageRouterProps>> = props => {
  const { slug = '' } = (props.router && props.router.query) || {};
  const data = cases.find(c => c.slug === slug);

  if (!data) {
    return null;
  }

  const { title, technologies, description, url, media } = data;

  return (
    <Page>
      <CaseHeader {...data} />
      <Header>
        <HeaderContent>
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
            {technologies.map(tech => (
              <Tag
                key={tech}
                css={`
                  ${tw`mr-1 mb-1`}
                `}
              >
                {tech}
              </Tag>
            ))}
          </div>
        </HeaderContent>
      </Header>
      <MediaContainer>
        {media.map(m => (
          <Media key={m.id} media={m} />
        ))}
      </MediaContainer>
    </Page>
  );
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
