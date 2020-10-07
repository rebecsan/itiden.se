import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { App, System, Webb } from '../AboutIcons';
import { H3 } from '../Layout';

const AppIcon = styled(App)`
  ${tw``};
`;
const SystemIcon = styled(System)`
  ${tw``};
  height: 87px;
`;
const WebbIcon = styled(Webb)`
  ${tw``};
  height: 87px;
`;

const TechBoxWrapper = styled.div`
  ${tw`mx-6 max-w-screen-lg flex flex-col md:(flex-row justify-between mx-6) lg:mx-auto`};
`;

const TechBox = styled.div`
  ${tw`items-center pb-24 flex flex-col lg:w-1/3`}
`;

const TechBoxMiddle = styled.div`
  ${tw`items-center pb-24 flex flex-col md:(w-1/3 mx-16 pb-32) lg:mx-20`}
`;

const TechHeading = styled(H3)`
  ${tw`my-6 md:my-5`}
`;

const TechInfo = styled.div`
  ${tw`text-center`}
  max-width: 327px;
`;

export const AboutIconsGroup = () => (
  <TechBoxWrapper>
    <TechBox>
      <AppIcon />
      <TechHeading>App</TechHeading>
      <TechInfo>
        Låt en app ta era tjänster till nästa nivå. Vi på Itiden är uppdaterade
        inom de senaste ramverken och utvecklar till alla platformar.
      </TechInfo>
    </TechBox>
    <TechBoxMiddle>
      <WebbIcon />
      <TechHeading>Webb</TechHeading>
      <TechInfo>
        Rätt webblösning för varje behov. Vi hjälper till från grunden med
        design, UX och rätt teknikval för att skräddarsy just ditt projekt.
      </TechInfo>
    </TechBoxMiddle>
    <TechBox>
      <SystemIcon />
      <TechHeading>System</TechHeading>
      <TechInfo>
        Backend, frontend, server, serverless och cloud. Databaser och api etc.
        Med stor teknisk kunskap hjälper dig med all integration.
      </TechInfo>
    </TechBox>
  </TechBoxWrapper>
);
