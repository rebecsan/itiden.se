import React from 'react';
import Link from 'next/link';
import tw from 'tailwind.macro';
import { SearchContext } from './Search';

interface PageHitData {
  type: 'page';
  objectID: string;
  title: string;
  header: string;
  body: string;
  slug: string;
}

interface CaseHitData {
  type: 'case';
  objectID: string;
  title: string;
  slug: string;
  description: string;
  partners: string[];
  tags: string[];
}

interface EmployeeHitData {
  type: 'employee';
  objectID: string;
  name: string;
  title: string;
  email: string | undefined;
  phone: string | undefined;
}

export type HitData = PageHitData | CaseHitData | EmployeeHitData;

const PageHit: React.FC<PageHitData> = ({ slug, title }) => {
  return (
    <Link href={`/page?slug=${slug}`} as={`/${slug}`} passHref>
      <a>{title}</a>
    </Link>
  );
};

const CaseHit: React.FC<CaseHitData> = ({ slug, title }) => {
  const { onRequestClose } = React.useContext(SearchContext);

  return (
    <Link href={`/case?slug=${slug}`} as={`/case/${slug}`} passHref>
      <a onClick={onRequestClose}>{title}</a>
    </Link>
  );
};

const EmployeeHit: React.FC<EmployeeHitData> = ({
  name,
  title,
  email,
  phone,
}) => {
  return (
    <div css={tw`mb-4`}>
      <div css={tw`font-bold text-gray-24`}>{name}</div>
      <div css={tw`text-tertiary text-sm`}>{title}</div>
      {email && (
        <a href={`mailto:${email}`} css={tw`block text-sm`}>
          {email}
        </a>
      )}
      {phone && (
        <a href={`tel:${phone}`} css={tw`block text-sm`}>
          {phone}
        </a>
      )}
    </div>
  );
};

export const Hit: React.FC<{ hit: HitData }> = ({ hit }) => {
  if (hit.type === 'page') {
    return <PageHit {...hit} />;
  }
  if (hit.type === 'case') {
    return <CaseHit {...hit} />;
  }
  if (hit.type === 'employee') {
    return <EmployeeHit {...hit} />;
  }

  return null;
};
