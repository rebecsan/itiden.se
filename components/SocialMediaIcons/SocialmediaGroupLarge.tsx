import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Facebook, LinkedIn, Instagram } from '../SocialMediaIcons';
import {
  SocialMediaContainer,
  SocialMediaLink,
} from '../SocialMediaIcons/SocialmediaGroupFooter';

const FacebookLogo = styled(Facebook)`
  ${tw`fill-current h-10 text-gray-250 hover:text-teal-400`};
`;

const LinkedInLogo = styled(LinkedIn)`
  ${tw`fill-current h-10 mx-12 text-gray-250 hover:text-teal-400`};
`;

const InstagramLogo = styled(Instagram)`
  ${tw`fill-current h-10 text-gray-250 hover:text-teal-400`};
`;

export const SocialmediaGroupLarge = () => (
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
