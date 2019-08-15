import React from 'react';
import Link from 'next/link';
import tw from 'tailwind.macro';

interface PageHitData {
  type: 'page';
  objectID: string;
  title: string;
  header: string;
  body: string;
  href: string;
}

interface CaseHitData {
  type: 'case';
  objectID: string;
  title: string;
  href: string;
  description: string;
  partners: string[];
  tags: string[];
}

interface EmployeeHitData {
  type: 'employee';
  objectID: string;
  name: string;
  title: string;
  email: string;
  phone: string;
}

export type HitData = PageHitData | CaseHitData | EmployeeHitData;

const PageHit: React.FC<PageHitData> = ({ href, title }) => {
  return (
    <Link href={href} passHref>
      <a>{title}</a>
    </Link>
  );
};

const CaseHit: React.FC<CaseHitData> = ({ href, title }) => {
  return (
    <Link href={href} passHref>
      <a>{title}</a>
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
    <div>
      <div css={tw`font-bold text-primary`}>{name}</div>
      <div css={tw`text-secondary text-sm`}>{title}</div>
      <Link href={`mailto:${email}`} passHref>
        <a css={tw`block text-secondary text-sm`}>{email}</a>
      </Link>
      <Link href={`tel:${phone}`} passHref>
        <a css={tw`block text-secondary text-sm`}>{phone}</a>
      </Link>
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
