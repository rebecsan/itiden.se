import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Logo } from '../Logo';
import { SocialmediaGroupFooter } from '../SocialMediaIcons';

const FooterContainer = styled.footer`
  ${tw`w-full bottom-0 mb-16 bg-gray-200 md:(mb-0 bg-gray-900)`}
`;

const Container = styled.div`
  ${tw`mx-auto flex flex-col justify-between text-gray-600 md:text-gray-350 px-6 pt-6 pb-5 md:(px-5 pt-16 pb-10) lg:px-0`};
  max-width: 1080px;
`;

const RowWrapper = styled.div`
  ${tw`md:flex md:flex-row md:justify-between`}
`;

const ItidenContainer = styled.div`
  ${tw``}
`;

const FooterLogo = styled(Logo)`
  ${tw`h-8 mb-10 fill-current text-gray-600 md:hidden`};
`;

const FooterContent = styled.div`
  ${tw`text-lg mb-3 md:w-1/2`};
`;

const ContactLink = styled.a`
  ${tw`self-start text-gray-700 md:text-gray-300 hover:text-purple-700 hover:md:text-teal-400`};
`;

const ContactInfo = styled.h3`
  ${tw`font-bold text-gray-700 md:text-gray-300 hover:text-purple-700 hover:md:text-teal-400`};
`;

const ContactContainer = styled.div`
  ${tw`md:(w-1/2 flex justify-end self-end space-x-6)`};
`;

const Divider = styled.div`
  ${tw`bg-gray-350 w-full h-px mt-6 mb-4 md:(bg-gray-500 mt-10 mb-8)`};
`;

const Wrapper = styled.div`
  ${tw`flex justify-between items-end`};
`;

const Address = styled.div`
  ${tw`text-xs-footer text-gray-600 hover:text-purple-700 md:(text-gray-350 hover:text-teal-400)`};
`;

export const Footer = () => (
  <FooterContainer>
    <Container>
      <RowWrapper>
        <ItidenContainer>
          <a href="/">
            <FooterLogo />
          </a>
        </ItidenContainer>
        <FooterContent>
          Kontakta oss och berätta om dig, <br /> dina behov eller din vision.
        </FooterContent>
        <ContactContainer>
          <ContactLink href="tel:0709-597008">
            <ContactInfo>0709-59 70 08</ContactInfo>
          </ContactLink>
          <ContactLink href="mailto:hej@itiden.se">
            <ContactInfo>hej@itiden.se</ContactInfo>
          </ContactLink>
        </ContactContainer>
      </RowWrapper>
      <Divider />
      <Wrapper>
        <ContactLink href="https://goo.gl/maps/Dqa7A3jFhuyatxjC8">
          <Address>
            Kungstorget 11–12 <br /> 411 41 Göteborg
          </Address>
        </ContactLink>
        <SocialmediaGroupFooter />
      </Wrapper>
    </Container>
  </FooterContainer>
);
