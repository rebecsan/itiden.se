import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const Wrapper = styled.div`
  ${tw`w-full sm:w-1/2 md:w-1/3 mb-6`}
`;

const Link = styled.a`
  ${tw`outline-none focus:text-brand`}
`;

interface ProfileCardProps {
  name: string;
  title: string;
  email: string;
  phone: string;
  avatarFileUrl?: string;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  title,
  email,
  phone,
  avatarFileUrl,
}) => {
  return (
    <Wrapper>
      {avatarFileUrl != null && (
        <img src={avatarFileUrl} alt={`${name} avatar`} />
      )}
      <b>{name}</b>
      <br />
      {title}
      <br />
      <Link href={`mailto:${email}`} onClick={e => e.stopPropagation()}>
        {email}
      </Link>
      {phone && (
        <>
          <br />
          <Link href={`tel:${phone}`} onClick={e => e.stopPropagation()}>
            {phone}
          </Link>
        </>
      )}
    </Wrapper>
  );
};
