import React from 'react';
import Link from 'next/link';
import tw from 'tailwind.macro';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { useGesture } from 'react-use-gesture';
import { Case } from '../../models/Case';
import { Tag } from '../Tag';
import 'lazysizes';
import { Media } from '../../models';
import { VisuallyHidden } from '../Helpers/VisuallyHidden';

interface CasePreviewProps extends Case {
  index: number;
}

const ImageContainer = styled(animated.div)`
  ${tw`rounded-sm overflow-hidden relative bg-white`}
  transform: scale(1);
  transition: all 0.2s;

  @media (min-width: 768px) {
    &:hover {
      z-index: 1;
      transform: scale(1.05);
    }
  }
`;

const Image = styled.img`
  display: block;
  width: 100%;
  will-change: transform;
`;

const TitleBox = styled.div`
  @media (min-width: 768px) {
    ${tw`absolute rounded-sm bg-white flex items-center inset-0 pointer-events-none`};
    mix-blend-mode: multiply;
    opacity: 0;
    transform: translate3d(-100px, 0, 0);
    transition: all 0.3s;
    z-index: 2;
  }
`;

const Title = styled(animated.div)`
  ${tw`text-lg md:text-2xl lg:text-2xl xl:text-4xl md:font-bold text-gray-24 relative px-4 py-2 md:px-20 w-full`}
`;

const Tags = styled.div`
  ${tw`hidden absolute bottom-0 left-0 p-4 md:flex flex-wrap items-end`}
  z-index: 10;
  opacity: 0;
`;

const Box = styled.a`
  ${tw`relative overflow-hidden w-full outline-none mb-4`}
  box-sizing: border-box;
  cursor: pointer;

  &:focus {
    outline: 2px solid #504dd2;
  }

  @media (min-width: 768px) {
    width: calc(50% - 0.5rem);
    &:hover {
      z-index: 1;
      ${TitleBox}, ${Tags} {
        opacity: 1;
        transform: translate3d(0px, 0, 0);
      }

      ${Image} {
        opacity: 0.2;
      }
    }
  }
`;
// react spring types are wrong. Apparently fixed in 9.x
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const trans1: any = (x: number, y: number, z: number) =>
  `translate3d(${x / 22}px, ${y / 22}px, 0) scale(${z})`;

export const CasePreview: React.FC<CasePreviewProps> = ({
  title,
  media,
  slug,
  technologies,
}) => {
  const [anim, setAnim] = useSpring(() => ({
    xyz: [0, 0, 1],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  const bindGestures = useGesture({
    onMove: ({ delta }) => {
      const [x, y] = delta;
      setAnim({ xyz: [-x, -y, 1] });
    },
    onHover: ({ hovering }) => {
      if (!hovering) {
        setAnim({ xyz: [0, 0, 1] });
      }
    },
  });

  const img = media[0] || null;

  if (!img) {
    return null;
  }

  const bindings =
    typeof window !== 'undefined' && window.innerWidth >= 768
      ? bindGestures()
      : {};

  return (
    <Link href={`/case/[slug]`} as={`/case/${slug}`} passHref>
      <Box tabIndex={0} {...bindings}>
        <ImageContainer>
          <MaybeLazyImage lazy={true} media={img} />
        </ImageContainer>
        <TitleBox>
          <Title
            aria-hidden="true"
            style={{ transform: anim.xyz.interpolate(trans1) }}
          >
            {title}
          </Title>
        </TitleBox>
        <Tags>
          {technologies.map(tech => (
            <Tag
              key={tech}
              css={`
                ${tw`ml-1 mt-1 whitespace-no-wrap`}
              `}
            >
              {tech}
            </Tag>
          ))}
        </Tags>
        <VisuallyHidden>{title}</VisuallyHidden>
      </Box>
    </Link>
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
