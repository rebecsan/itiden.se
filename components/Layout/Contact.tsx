import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Content, Hero } from '../Layout';


const GreenBanner = styled(Hero)`
  ${tw`py-10 bg-green text-center mb-24`};
`;

export const Contact = () => (
  <GreenBanner>
    <Content>
      <p>Kontakta oss och berätta mer om dig och dina behov.</p>
    </Content>
  </GreenBanner>
);
