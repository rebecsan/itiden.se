import React from 'react';
import Head from 'next/head';
import { Page, Header, Content } from '../components/Layout';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { NextComponentType } from 'next';
import { Employee } from '../models/Employee';
import { ProfileCard } from '../components/ProfileCard';

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

const IndexPage: NextComponentType<{}, {}, IndexPageProps> = ({
  employees,
}) => {
  return (
    <Page>
      <IndexHeader />
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
            <h2>Ring</h2>
            <a href="tel:031-7740950">031-774 09 50</a>
          </ContactInfo>
        </ContactBox>
        <ContactBox>
          <ContactLink href="mailto:hej@itiden.se">
            <img src="/static/mail.svg" alt="Maila" />
          </ContactLink>
          <ContactInfo>
            <h2>Maila</h2>
            <a href="mailto:hej@itiden.se">hej@itiden.se</a>
          </ContactInfo>
        </ContactBox>
        <ContactBox>
          <ContactLink href="https://goo.gl/maps/Dqa7A3jFhuyatxjC8">
            <img src="/static/find.svg" alt="Hitta" />
          </ContactLink>
          <ContactInfo>
            <h2>Hitta hit</h2>
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

const IndexHeader: React.FC<{}> = () => (
  <Head>
    <title>itiden - Webbutveckling | Apputveckling | Göteborg</title>
    <meta
      name="Description"
      content="itiden är en digital produktionsbyrå specialiserade på webbutveckling och apputveckling i Göteborg som hjälper våra kunder utveckla webbplatser, webbapplikationer och mobilappar."
    />
    <meta
      name="title"
      property="og:title"
      content="itiden - Webbutveckling | Apputveckling | Göteborg"
    />
    <meta name="image" property="og:image" content="/static/itiden-share.png" />
    <link rel="canonical" href="https://itiden.se" />
  </Head>
);
