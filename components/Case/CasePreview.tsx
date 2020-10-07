import React from 'react';
import Link from 'next/link';
import tw from 'twin.macro';
import { H4 } from '../Layout';
import styled from 'styled-components';
import { animated } from 'react-spring';
import { Case } from '../../models/Case';
import { Tag } from '../Tag';
import 'lazysizes';
import { Media } from '../../models';

interface CasePreviewProps extends Case {
  index: number;
}

const ImageContainer = styled(animated.div)`
  ${tw`rounded-sm overflow-hidden relative`}
  }
`;

const Image = styled.img`
  display: block;
  width: 100%;
  will-change: transform;

  transform: scale(1);
  transition: all 0.5s;

  @media (min-width: 768px) {
    &:hover {
      transform: scale(1.02);
    }
`;

const CaseWrapper = styled.div`
  ${tw`mb-16`}
  @media (min-width: 768px) {
    width: calc(50% - 0.5rem);
  }
`;

const TagsWrapper = styled.div`
  ${tw`md:flex flex-wrap items-end`}
`;

const A = styled.a`
`;

export const CasePreview: React.FC<CasePreviewProps> = ({
  title,
  media,
  slug,
  technologies,
}) => {
  const img = media[0] || null;

  if (!img) {
    return null;
  }

  return (
      <CaseWrapper>
        <ImageContainer>
          <Link href={`/case/[slug]`} as={`/case/${slug}`} passHref>
            <A>
              <MaybeLazyImage lazy={true} media={img} />
            </A>
          </Link>
        </ImageContainer>
        <Link href={`/case/[slug]`} as={`/case/${slug}`} passHref>
          <A>
            <H4>{title}</H4>
          </A>
        </Link>
        <TagsWrapper>
          {technologies.map(tech => (
            <Tag
              key={tech}
              css={`
                ${tw`mr-4 whitespace-no-wrap text-gray-100`}
              `}
            >
              {tech}
            </Tag>
          ))}
        </TagsWrapper>
    </CaseWrapper>
  );
};

const MaybeLazyImage: React.FC<{
  lazy: boolean;
  media: Media;
}> = ({ lazy, media }) => {
  const url = media.file.url;
  const src = `${url}?q=95&w=600`;
  const imgSizes = [600, 500, 400, 300];
  const sizes =
    '(min-width: 768px) calc(100vw / 2), (min-width: 1200px) calc(1200px / 2), 100vw';
  const srcsetWebp = imgSizes
    .map(size => `${url}?q=95&fm=webp&w=${size} ${size}w`)
    .join(',');
  const srcset = imgSizes
    .map(size => `${url}?q=95&w=${size} ${size}w`)
    .join(',');

  if (lazy) {
    return (
      <picture>
        <source
          type="image/webp"
          // source element requires a src-set.
          srcSet="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
          data-srcset={srcsetWebp}
          data-sizes={sizes}
        />
        <Image
          className="lazyload"
          alt={media.title}
          src="/static/case-placeholder.jpg"
          data-src={src}
          data-srcset={srcset}
          data-sizes={sizes}
        />
      </picture>
    );
  }
  return (
    <picture>
      <source type="image/webp" srcSet={srcsetWebp} sizes={sizes} />
      <Image alt={media.title} src={src} srcSet={srcset} sizes={sizes} />
    </picture>
  );
};
