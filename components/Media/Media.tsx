import React from 'react';
import { Media as MediaInterface } from '../../models/Media';
import styled from 'styled-components';
import tw from 'tailwind.macro';

interface MediaProps {
  media: MediaInterface;
}

const Wrapper = styled.div`
  ${tw`mb-8 mx-auto`}
  max-width: 100%;
`;

const Image = styled.img`
  ${tw`block mx-auto`}
  max-width: 100%;
`;

const Caption = styled.figcaption`
  ${tw`text-sm text-tertiary mx-auto block text-center p-2`}
`;

function isImage(type: string): boolean {
  return type.includes('image/');
}

export const Media: React.FC<MediaProps> = ({ media }) => {
  const { title, description, file } = media;

  if (isImage(file.contentType)) {
    const { url: origUrl } = file;
    const url = `${origUrl}?q=90`;
    const { width } = file.details.image;

    return (
      <Wrapper style={{ width }}>
        <figure>
          <Image
            alt={title}
            src={url}
            srcSet={`${url}&w=375 375w, ${url}&w=400 400w, ${url}&w=600 600w, ${url}&w=768 768w, ${url}`}
            sizes="(max-width: 375px) 375px, (max-width: 400px) 400px, (max-width: 600px) 600px, (max-width: 768px) 768px, 800px"
          />
          {description && <Caption>{description}</Caption>}
        </figure>
      </Wrapper>
    );
  }

  return (
    <Wrapper style={{ maxWidth: '800px' }}>
      <video controls muted width="100%" src={file.url} />
    </Wrapper>
  );
};
