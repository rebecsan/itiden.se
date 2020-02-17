import { NextComponentType } from 'next';
import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { IndexHeader } from '../components/IndexHeader';
import { Content, Header, Page } from '../components/Layout';

const Input = styled.input`
  ${tw`border border-solid border-gray-600 rounded-lg bg-blue-f5 py-2 px-4 block w-full focus:outline-none`}
`;

const Checkbox = styled.input`
  ${tw`border border-solid border-gray-600 rounded-lg bg-blue-f5 focus:outline-none`}
`;

const Textarea = styled.textarea`
  ${tw`border border-solid border-gray-600 rounded-lg bg-blue-f5 py-2 px-4 block w-full focus:outline-none`}
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
      <IndexHeader title="Vi söker webbutvecklare" />
      <Header role="banner">
        <Content>
          <h3>Jobba hos oss</h3>
          <h1>Vi söker webbutvecklare</h1>
          <p>
            Är du en webbutvecklare med god kunskap i HTML, CSS och JavaScript
            som dessutom har kunskap i eller är sugen på att lära dig React,
            Laravel, .NET Core och/eller React Native?
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
            action="/jobb-tackar"
            encType="multipart/form-data"
          >
            <input type="hidden" name="form-name" value="job-webdeveloper" />
            <HiddenParagraph>
              <label>
                Don’t fill this out if you are a human:{' '}
                <input name="bot-field" />
              </label>
            </HiddenParagraph>
            <p>
              <label>Namn *</label>
              <br />
              <Input required type="text" name="name" />
            </p>
            <p>
              <label>Email *</label>
              <br />
              <Input required type="email" name="email" />
            </p>
            <p>
              <label>Information om dig *</label>
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
                <Checkbox type="checkbox" name="aspnet" /> .NET Core
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
              <label>CV</label>
              <br />
              <input type="file" name="files" />
            </p>
            <p>
              <label>
                <Checkbox type="checkbox" name="terms" required /> Jag godkänner
                att itiden sparar mina uppgifter.
              </label>
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
