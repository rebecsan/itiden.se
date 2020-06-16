import { NextComponentType } from 'next';
import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { IndexHeader } from '../components/IndexHeader';
import { Content, Header, Page } from '../components/Layout';
import { ProfileCard } from '../components/ProfileCard';
import { Employee } from '../models/Employee';

interface IndexPageProps {
  employees: Employee[];
}

const ContactWrapper = styled(Content)`
  ${tw`mx-auto px-4 justify-around`};
`;

const ContactBoxWrapper = styled(ContactWrapper)`
  ${tw`flex flex-wrap mb-8 flex-col md:flex-row`};
`;

const ContactBox = styled.div`
  ${tw`mb-4 md:mb-8 text-center content-center items-center flex flex-wrap flex-row md:flex-col`}
`;

const ProfileWrapper = styled.div`
  ${tw`flex flex-wrap`};
`;

const ContactLink = styled.a`
  ${tw`rounded-full inline-block flex content-center items-center justify-center flex-wrap sm:mb-4 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64`}
  border: 1px solid rgba(77, 100, 210, 0.1);
  box-sizing: border-box;
  img {
    transition: all 0.2s ease-in-out;
  }
  &:hover img {
    transform: scale(1.1);
  }
  @media (max-width: 1024px) {
    img {
      height: 120px;
    }
  }
  @media (max-width: 767px) {
    border: none;
    img {
      height: 100px;
    }
  }
`;

const ContactInfo = styled.div`
  text-align: left;
`;

const ContactInfoTitle = styled.h2`
  ${tw`whitespace-no-wrap`};
`;

const IndexPage: NextComponentType<{}, {}, IndexPageProps> = ({
  employees,
}) => {
  return (
    <Page>
      <IndexHeader title="Kontakt" />
      <Header role="banner">
        <Content>
          <h3>Vad kan vi hjälpa dig med?</h3>
          <h1>Kontakta oss</h1>
          <p>
            Vi på Itiden ser fram emot att höra från dig.
            <br />
            Tveka inte att kontakta oss!
          </p>
        </Content>
      </Header>
      <ContactBoxWrapper>
        <ContactBox>
          <ContactLink href="tel:031-7740950">
            <img src="/static/call.svg" alt="Ring" />
          </ContactLink>
          <ContactInfo>
            <ContactInfoTitle>Ring</ContactInfoTitle>
            <a href="tel:0709-597008">0709-597008</a>
          </ContactInfo>
        </ContactBox>
        <ContactBox>
          <ContactLink href="mailto:hej@itiden.se">
            <img src="/static/mail.svg" alt="Maila" />
          </ContactLink>
          <ContactInfo>
            <ContactInfoTitle>Maila</ContactInfoTitle>
            <a href="mailto:hej@itiden.se">hej@itiden.se</a>
          </ContactInfo>
        </ContactBox>
        <ContactBox>
          <ContactLink href="https://goo.gl/maps/Dqa7A3jFhuyatxjC8">
            <img src="/static/find.svg" alt="Hitta" />
          </ContactLink>
          <ContactInfo>
            <ContactInfoTitle>Hitta hit</ContactInfoTitle>
            <a href="https://goo.gl/maps/Dqa7A3jFhuyatxjC8">
              Kungstorget 11-12
              <br />
              411 41 Göteborg
            </a>
          </ContactInfo>
        </ContactBox>
      </ContactBoxWrapper>
      <ContactWrapper>
        <h2>Teamet</h2>
        <ProfileWrapper>
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
      </ContactWrapper>
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
