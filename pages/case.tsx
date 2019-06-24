import React from 'react';
import Head from 'next/head';
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import { Case } from '../models/Case';
import { getCases } from '../data/data';

const cases = getCases();
const slug = 'chemsec';

const Case: React.FC<{}> = () => {
  const data = cases.find(c => c.slug === slug);

  if (!data) {
    return null;
  }

  return (
    <>
      <CaseHeader {...data} />
    </>
  );
};

export default Case;

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
