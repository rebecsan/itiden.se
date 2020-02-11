import React from 'react';
import Head from 'next/head';
import { Page, Header, Content } from '../components/Layout';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { NextComponentType } from 'next';

const Input = styled.input`
  ${tw`border border-solid border-gray-600 rounded-lg bg-brand-light py-2 px-4 block w-full focus:outline-none`}
`;

const Checkbox = styled.input`
  ${tw`border border-solid border-gray-600 rounded-lg bg-brand-light focus:outline-none`}
`;

const Textarea = styled.textarea`
  ${tw`border border-solid border-gray-600 rounded-lg bg-brand-light py-2 px-4 block w-full focus:outline-none`}
`;

const HiddenParagraph = styled.p`
  ${tw`hidden`}
`;

export const Button = styled.button`
  ${tw`inline-block bg-brand text-white py-2 px-8 rounded-full hover:shadow-md border-none	`}
`;

const IndexPage: NextComponentType = () => {
  return (
    <Page>
      <IndexHeader />
      <Header role="banner">
        <Content>
          <h3>Jobba hos oss</h3>
          <h1>Vi söker webbutvecklare</h1>
          <p>
            Är du en webbutvecklare med god kunskap i HTML, CSS och JavaScript
            som dessutom har kunskap i eller är sugen på att lära dig React,
            Laravel, ASP.NET Core och/eller React Native?
          </p>
          <p>
            itiden är ett litet företag med kontor i centrala Göteborg vid
            Kungsportsplatsen. Vi sitter in-house och utvecklar spännande
            projekt ihop med våra kunder. Detta gör att vi kan bygga ett starkt
            utvecklar-team där mycket kunskap kan delas emellan varandra.
          </p>
          <p>Låter det intressant? Tveka inte att söka!</p>
          <form
            name="job-webdeveloper"
            netlify-honeypot="bot-field"
            method="POST"
            data-netlify="true"
          >
            <HiddenParagraph>
              <label>
                Don’t fill this out if you are a human:{' '}
                <input name="bot-field" />
              </label>
            </HiddenParagraph>
            <p>
              <label>Namn</label>
              <br />
              <Input required type="text" name="name" />
            </p>
            <p>
              <label>Email</label>
              <br />
              <Input required type="email" name="email" />
            </p>
            <p>
              <label>Information om dig</label>
              <br />
              <Textarea required rows={4} name="message"></Textarea>
            </p>
            <p>
              Jag har god kunskap i:
              <br />
            </p>
            <p>
              <label>
                <Checkbox type="checkbox" name="htmlcss" /> HTML/CSS
              </label>
              <br />
              <label>
                <Checkbox type="checkbox" name="javascript" /> JavaScript
              </label>
              <br />
              <label>
                <Checkbox type="checkbox" name="laravel" /> Laravel
              </label>
              <br />
              <label>
                <Checkbox type="checkbox" name="aspnet" /> ASP.NET Core
              </label>
              <br />
              <label>
                <Checkbox type="checkbox" name="react" /> React
              </label>
              <br />
              <label>
                <Checkbox type="checkbox" name="reactnative" /> React Native
              </label>
            </p>
            <p>
              <label>CV och bilagor</label>
              <br />
              <input type="file" name="files" multiple />
            </p>
            <p>
              <Button type="submit">Skicka</Button>
            </p>
          </form>
        </Content>
      </Header>
    </Page>
  );
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
  </Head>
);
