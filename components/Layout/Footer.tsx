import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Logo } from '../Logo';
import { Facebook, LinkedIn, Instagram } from '../SocialMediaIcons';

const Container = styled.div`
  ${tw`w-full flex px-4 mt-8 m-auto mb-4 justify-between`}
  max-width: 1400px;
`;

const ItidenContainer = styled.div`
  ${tw`flex-1`}
`;

const SocialMediaContainer = styled.div``;

const SocialMediaLink = styled.a`
  ${tw`ml-4`}
`;

const FooterLogo = styled(Logo)`
  ${tw`h-6`};
  fill: #242424;
`;

const FacebookLogo = styled(Facebook)`
  ${tw`h-6`};
`;

const LinkedInLogo = styled(LinkedIn)`
  ${tw`h-6`};
`;

const InstagramLogo = styled(Instagram)`
  ${tw`h-6`};
`;

export const Footer = () => (
  <Container>
    <ItidenContainer>
      <a href="/">
        <FooterLogo />
      </a>
    </ItidenContainer>
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
  </Container>
);
