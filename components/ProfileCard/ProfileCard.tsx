import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Wrapper = styled.div`
  ${tw`w-full md:w-1/2 lg:w-1/3 mt-8 flex`}
`;

const Avatar = styled.img`
  ${tw`mr-5`}
  height: 108px;
  width: 112px;
`;

const Info = styled.div`
  ${tw`flex flex-col justify-center text-base-links`}
`;

const Link = styled.a`
  ${tw`text-teal-400 hover:text-gray-300`}
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
        <Link
          href={`mailto:${email}`}
          onClick={(e: { stopPropagation: () => any }) => e.stopPropagation()}
        >
          {email}
        </Link>
        {phone && (
          <>
            <Link
              href={`tel:${phone}`}
              onClick={(e: { stopPropagation: () => any }) =>
                e.stopPropagation()
              }
            >
              {phone}
            </Link>
          </>
        )}
      </Info>
    </Wrapper>
  );
};
