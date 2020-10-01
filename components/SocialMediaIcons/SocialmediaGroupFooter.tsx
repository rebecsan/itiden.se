import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Facebook, LinkedIn, Instagram } from '../SocialMediaIcons';

export const SocialMediaContainer = styled.div`
  ${tw``}
`;

export const SocialMediaLink = styled.a`
  ${tw``}
`;

const FacebookLogo = styled(Facebook)`
  ${tw`fill-current h-6 text-gray-500 md:text-gray-250 hover:text-purple-700 hover:md:text-teal-400`};
`;

const LinkedInLogo = styled(LinkedIn)`
  ${tw`fill-current h-6 text-gray-500 mx-4 md:text-gray-250 hover:text-purple-700 hover:md:text-teal-400`};
`;

const InstagramLogo = styled(Instagram)`
  ${tw`fill-current h-6 text-gray-500 md:text-gray-250 hover:text-purple-700 hover:md:text-teal-400`};
`;

export const SocialmediaGroupFooter = () => (
  <SocialMediaContainer>
    <SocialMediaLink href="https://www.facebook.com/itiden">
      <FacebookLogo />
    </SocialMediaLink>
    <SocialMediaLink href="https://www.linkedin.com/company/itiden">
      <LinkedInLogo />
    </SocialMediaLink>
    <SocialMediaLink href="https://www.instagram.com/itidenab/">
      <InstagramLogo />
    </SocialMediaLink>
  </SocialMediaContainer>
);
