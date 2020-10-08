import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { NextPageContext } from 'next';
import Head from 'next/head';
import { withRouter, NextRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Content, Page, H2 } from '../../components/Layout';
import { Tags } from '../../components/Tag';
import { Case } from '../../models/Case';

interface CasePageProps {
  data?: Case;
  router: NextRouter;
}

export const Header = styled.div`
  ${tw`md:pt-48`}
  & p {
    ${tw`w-full md:w-3/4 lg:w-3/5 lg:mx-0`}
  }
`;

const ContentMedia = styled.div`
  ${tw`pb-16`}
`;

const MediaWrapper = styled.div`
  ${tw`max-w-screen-lg bg-center bg-contain bg-no-repeat mx-6 sm:mx-5`}
  background-size: 100%;
  max-width: 1120px;

  @media all and (max-width: 479px) {
    padding-top: 133%;
    ${tw`mx-0`}
    background-image:url(${(props: { mobileImage: string; }) => props.mobileImage});
  }

  @media all and (min-width: 480px) {
    padding-top: 52%;
    background-image:url(${(props: { desktopImage: string; }) => props.desktopImage});
  }

  @media (min-width: 1080px) {
    ${tw`pt-0`}
    height: 603px;
  }

  @media (min-width: 1120px) {
    ${tw`px-0 m-auto`}
    max-width: 1080px;
  }

`;

const Information = styled.div`
  ${tw`pt-16 pb-20 md:pt-12`}

  & p {
    ${tw`text-lg`}
  }

  & a {
    ${tw`text-teal-400 hover:text-gray-100`}
  }
`;

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
    desktopMedia,
    mobileMedia,
    partners,
  } = data;

  return (
    <Page noLogoFnutt>
      <CaseHeader {...data} />
      <Header>
        {desktopMedia[0] && mobileMedia[0] ? (
          <MediaWrapper desktopImage={desktopMedia[0].file.url} mobileImage={mobileMedia[0].file.url}/>
        ) : ''}
        <Content role="main">
          <Information>
            <H2>{title}</H2>
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
          </Information>
        </Content>
      </Header>
      <ContentMedia>
        {desktopMedia[1] && mobileMedia[1] ? (
          <MediaWrapper desktopImage={desktopMedia[1].file.url} mobileImage={mobileMedia[1].file.url}/>
        ) : ''}
      </ContentMedia>
      <ContentMedia>
        {desktopMedia[2] && mobileMedia[2] ? (
          <MediaWrapper desktopImage={desktopMedia[2].file.url} mobileImage={mobileMedia[2].file.url}/>
        ) : ''}
      </ContentMedia>
    </Page>
  );
};

CasePage.getInitialProps = async ({ query }: NextPageContext) => {
  const cases = await import('../../data/data/case.json').then(m => m.default);
  const data = cases.find(c => c.slug === query.slug);
  return { data };
};

export default withRouter(CasePage);

const CaseHeader: React.FC<Case> = ({ title, description, desktopMedia, slug }) => {
  const imageUrl = desktopMedia[0] ? desktopMedia[0].file.url : '';
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