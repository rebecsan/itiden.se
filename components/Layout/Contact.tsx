import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Content, Hero } from '../Layout';
import { ContactsGroup } from '../../components/ContactIcons/ContactsGroup';

const ContactWrapper = styled.div`
  ${tw`mb-24`}
`;

const GreenBanner = styled(Hero)`
  ${tw`py-10 bg-green text-center`};
`;

const GrayBanner = styled(Hero)`
  ${tw`py-10 bg-gray-600 text-center`};
`;

export const Contact = () => (
  <ContactWrapper>
    <GreenBanner>
      <Content>
        <p>Kontakta oss och berätta mer om dig och dina behov.</p>
      </Content>
    </GreenBanner>
    <GrayBanner>
      <Content>
        <ContactsGroup mail phone />
      </Content>
    </GrayBanner>
  </ContactWrapper>
);
