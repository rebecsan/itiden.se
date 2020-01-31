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

const ContactWrapper = styled.div`
  ${tw`mx-auto pl-4`};
  max-width: 900px;
`;

const ContactBoxWrapper = styled(ContactWrapper)`
  ${tw`flex flex-wrap mb-8`};
`;

const ContactBox = styled.div`
  ${tw`w-1/2 mb-8 md:w-1/3 text-center content-center items-center flex flex-wrap flex-col`}
`;

const ProfileWrapper = styled.div`
  ${tw`flex flex-wrap`};
`;

const ContactLink = styled.a`
  ${tw`rounded-full inline-block flex content-center items-center justify-center flex-wrap mb-8 w-24 h-24 md:w-56 md:h-56 lg:w-64 lg:h-64`}
  border: 1px solid rgba(77, 100, 210, 0.1);
  box-sizing: border-box;
  img {
    transition: all 0.2s ease-in-out;
  }
  &:hover img {
    transform: scale(1.1);
  }
  @media (max-width: 768px) {
    img {
      height: 80px;
    }
    h2 {
      font-size: 1rem;
    }
  }
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
          <h2>Ring</h2>
          <p>031-774 09 50</p>
        </ContactBox>
        <ContactBox>
          <ContactLink href="tel:0709-597008">
            <img src="/static/mail.svg" alt="Maila" />
          </ContactLink>
          <h2>Maila</h2>
          <p>hej@itiden.se</p>
        </ContactBox>
        <ContactBox>
          <ContactLink href="https://goo.gl/maps/Dqa7A3jFhuyatxjC8">
            <img src="/static/find.svg" alt="Hitta" />
          </ContactLink>
          <h2>Hitta hit</h2>
          <p>
            Kungstorget 11-12
            <br />
            411 41 Göteborg
          </p>
        </ContactBox>
      </ContactBoxWrapper>
      <ContactWrapper>
        <h2>Teamet</h2>
        <ProfileWrapper>
          {employees
            .sort((a, b) => (a.name < b.name ? -1 : 1))
            .map(employee => (
              <ProfileCard
                key={employee.id}
                name={employee.name}
                title={employee.title}
                email={employee.email}
                phone={employee.phone}
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
  return { employees };
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
