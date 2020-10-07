import { NextComponentType } from 'next';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { IndexHeader } from '../components/IndexHeader';
import { Page, Hero } from '../components/Layout';
import { ProfileCard } from '../components/ProfileCard';
import { Employee } from '../models/Employee';
import { SocialmediaGroupLarge } from '../components/SocialMediaIcons/SocialmediaGroupLarge';
import { ContactsGroup } from '../components/ContactIcons/ContactsGroup';
import { Map } from '../components/Map/Map';

interface IndexPageProps {
  employees: Employee[];
}

const EmployeesWrapper = styled.div`
  ${tw`flex flex flex-wrap`};
`;
const TopContentWrapper = styled.div`
  ${tw`flex -mt-20 md:(min-h-screen mt-0) items-center max-w-screen-lg mx-auto`}
  margin-bottom: -104px;
`;
const ContentWrapper = styled.div`
  ${tw`mx-6 md:mx-5 lg:mx-auto max-w-screen-lg`}
`;
const QuarteredContent = styled.div`
  ${tw`flex flex-col mx-6 md:(mx-5 w-3/4) lg:(mx-0)`}
`;
const GrayBanner = styled(Hero)`
  ${tw`mt-16 py-10 bg-gray-600`}
`;
const GreenBanner = styled(Hero)`
  ${tw`py-10 bg-green text-center mb-24`};
`;
const WhiteBanner = styled(Hero)`
  ${tw`hidden py-10 bg-white text-center mt-32 md:block`};
`;
const ContactLink = styled.a`
  ${tw`text-gray-700 text-xl font-semibold cursor-pointer hover:text-purple-700`}
`;
const AdressNarrow = styled.a`
  ${tw`md:hidden text-gray-600 text-xl font-semibold cursor-pointer hover:text-purple-700`}
`;
const Adresswide = styled.a`
  ${tw`hidden md:inline text-gray-600 text-xl font-semibold cursor-pointer hover:text-purple-700`}
`;
const Filler = styled.div`
  ${tw`md:hidden`}
  height: 35vh;
`;
const Divider = styled.div`
  ${tw`w-full h-px bg-gray-500 mt-8 last:hidden md:hidden`};
`;

const location = {
  address: 'Kungstorget 11, 411 10 Göteborg',
  lat: 57.703771,
  lng: 11.9687671,
};

const zoomLevel = 17;

const IndexPage: NextComponentType<{}, {}, IndexPageProps> = ({
  employees,
}) => {
  return (
    <Page>
      <IndexHeader title="Kontakt" />
      <Filler />
      <TopContentWrapper>
        <QuarteredContent>
          <h1>Vi ser fram emot att höra från dig.</h1>
          <ContactsGroup />
        </QuarteredContent>
      </TopContentWrapper>
      <GrayBanner>
        <SocialmediaGroupLarge />
      </GrayBanner>
      <Map {...{ location, zoomLevel }} />
      <GreenBanner>
        <AdressNarrow href="https://goo.gl/maps/Dqa7A3jFhuyatxjC8">
          Kungstorget 11–12, <br /> 411 41 Göteborg
        </AdressNarrow>
        <Adresswide href="https://goo.gl/maps/Dqa7A3jFhuyatxjC8">
          Kungstorget 11–12, 411 41 Göteborg
        </Adresswide>
      </GreenBanner>
      <ContentWrapper>
        <h2>Medarbetare</h2>
        <EmployeesWrapper>
          {employees.map(employee => (
            <>
              <ProfileCard
                key={employee.id}
                name={employee.name}
                title={employee.title}
                email={employee.email}
                phone={employee.phone}
                avatarFileUrl={employee.avatar?.file.url}
              />
              <Divider key={employee.id} />
            </>
          ))}
        </EmployeesWrapper>
      </ContentWrapper>
      <WhiteBanner>
        <ContactLink href="mailto:hej@itiden.se?subject=Ny medarbetare?">
          Hör av dig, vi är alltid intresserade av duktiga och drivna
          medarbetare!
        </ContactLink>
      </WhiteBanner>
    </Page>
  );
};

IndexPage.getInitialProps = async () => {
  const employees = await import('../data/data/employee.json').then(
    m => m.default
  );
  return {
    employees: employees.sort((a: Employee, b: Employee) => a.order - b.order),
  };
};

export default IndexPage;
