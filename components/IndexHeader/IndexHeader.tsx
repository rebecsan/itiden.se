import React from 'react';
import Head from 'next/head';

interface IndexHeaderProps {
  title?: string;
  description?: string;
  imageSrc?: string;
}

export const IndexHeader: React.FC<IndexHeaderProps> = ({
  title,
  description,
  imageSrc,
}) => (
  <Head>
    <title>
      Itiden - {title ? title : 'Webbutveckling | Apputveckling | Göteborg'}
    </title>
    <meta
      name="Description"
      content={
        description
          ? description
          : 'Itiden är en digital produktionsbyrå med ett team av webbutvecklare och apputvecklare i Göteborg. Vi jobbar tillsammans med produktbolag, startups och byråer och hjälper med utveckling av webbsidor, webbapplikation och mobilappar.'
      }
    />
    <meta
      name="title"
      property="og:title"
      content={`Itiden - ${
        title ? title : 'Webbutveckling | Apputveckling | Göteborg'
      }`}
    />
    <meta
      name="image"
      property="og:image"
      content={imageSrc ? imageSrc : '/static/itiden-share.png'}
    />
  </Head>
);
