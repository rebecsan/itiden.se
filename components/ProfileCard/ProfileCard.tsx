import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const Wrapper = styled.div`
  ${tw`w-full sm:w-1/2 md:w-1/3 mb-6 flex`}
`;

const Avatar = styled.img`
  ${tw`w-1/3 mr-4`}
`;

const Info = styled.div`
  ${tw`flex flex-col justify-center`}
`;

const Link = styled.a`
  ${tw`outline-none focus:text-brand`}
`;

interface ProfileCardProps {
  name: string;
  title: string;
  email: string;
  phone?: string;
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
        <Avatar src={avatarFileUrl} alt={`${name} avatar`} />
      )}
      <Info>
        <b>{name}</b>
        {title}
        <Link href={`mailto:${email}`} onClick={e => e.stopPropagation()}>
          {email}
        </Link>
        {phone && (
          <>
            <Link href={`tel:${phone}`} onClick={e => e.stopPropagation()}>
              {phone}
            </Link>
          </>
        )}
      </Info>
    </Wrapper>
  );
};
