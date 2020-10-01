import { NextComponentType } from 'next';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { IndexHeader } from '../components/IndexHeader';
import { Page } from '../components/Layout';
import { ProfileCard } from '../components/ProfileCard';
import { Employee } from '../models/Employee';
import { SocialmediaGroupLarge } from '../components/SocialMediaIcons/SocialmediaGroupLarge';
import { ContactsGroup } from '../components/ContactIcons/ContactsGroup';

interface IndexPageProps {
  employees: Employee[];
}

const ProfileWrapper = styled.div`
  ${tw`flex flex-col`};
`;

export const TopContentWrapper = styled.div`
  ${tw`flex -mt-20 md:(min-h-screen mt-0 ) items-center max-w-screen-lg mx-auto`}
`;
export const ContentWrapper = styled.div`
  ${tw`flex max-w-screen-lg mx-auto`}
`;
export const QuarteredContent = styled.div`
  ${tw`flex flex-col mx-6 md:(mx-5 w-3/4) lg:(mx-0)`}
`;
export const GrayBanner = styled.div`
  ${tw`flex justify-center mt-16 w-full py-10 bg-gray-600`}
`;
export const Filler = styled.div`
  ${tw`md:hidden`}
  height: 35vh;
`;

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
      <ContentWrapper>
        {/* <EmployeeWrapper> */}
        <ProfileWrapper>
          <h2>Medarbetare</h2>
          {employees.map(employee => (
            <ProfileCard
              key={employee.id}
              name={employee.name}
              title={employee.title}
              email={employee.email}
              phone={employee.phone}
              avatarFileUrl={employee.avatar?.file.url}
            />
          ))}
        </ProfileWrapper>
        {/* </EmployeeWrapper> */}
      </ContentWrapper>
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
