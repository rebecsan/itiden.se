import React from 'react';
import tw from 'tailwind.macro';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { useGesture } from 'react-use-gesture';
import { Case } from '../../models/Case';
import { Link } from '../../routes';
import { Tag } from '../Tag';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { useUA, UADisplay } from '../UAParser';

type CasePreviewProps = Case;

const ImageContainer = styled(animated.div)`
  ${tw`rounded-sm overflow-hidden relative bg-white hover:shadow-xl`}
  transform: scale(1);
  transition: all 0.2s;

  &:hover {
    z-index: 1;
    transform: scale(1.1);
  }
`;

const Image = styled(animated.img)`
  display: block;
  width: 100%;
  will-change: transform;
`;

const TitleBox = styled.div`
  ${tw`absolute rounded-sm bg-black flex items-center inset-0 pointer-events-none`};
  mix-blend-mode: multiply;
  opacity: 0;
  transform: translate3d(-100px, 0, 0);
  transition: all 0.3s;
  z-index: 2;
`;

const Title = styled(animated.div)`
  ${tw`font-mono font-bold text-2xl lg:text-2xl xl:text-4xl font-semiBold text-white relative pl-20 pr-20 w-full`}
`;

const Tags = styled.div`
  ${tw`absolute bottom-0 right-0 p-4 flex flex-wrap flex-row-reverse items-end`}
  opacity: 0;
  z-index: 10;
  width: 50%;
`;

const Box = styled.div`
  ${tw`relative overflow-hidden w-full md:w-1/2 p-2`}
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    z-index: 1;
    ${TitleBox}, ${Tags} {
      opacity: 1;
      transform: translate3d(0px, 0, 0);
    }

    ${Image} {
      opacity: 0.5;
    }
  }
`;

const trans1 = (x: number, y: number, z: number) =>
  `translate3d(${x / 22}px, ${y / 22}px, 0) scale(${z})`;

export const CasePreview: React.FC<CasePreviewProps> = props => {
  return (
    <>
      <UADisplay type="mobile">
        <CasePreviewDefault {...props} />
      </UADisplay>
      <UADisplay type="desktop">
        <CasePreviewDesktop {...props} />
      </UADisplay>
    </>
  );
};

const CasePreviewDefault: React.FC<CasePreviewProps> = ({
  title,
  media,
  slug,
}) => {
  const img = media[0] || null;

  if (!img) {
    return null;
  }

  return (
    <Link route={`/case/${slug}`} prefetch>
      <div
        css={`
          ${tw`mb-4`}
        `}
      >
        <Image alt={img.title} src={img.file.url} />
        <div>{title}</div>
      </div>
    </Link>
  );
};

const CasePreviewDesktop: React.FC<CasePreviewProps> = ({
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

  return (
    <Link route={`/case/${slug}`} prefetch>
      <Box {...bindGestures()}>
        <ImageContainer>
          <Image alt={img.title} src={img.file.url} />
        </ImageContainer>
        <TitleBox>
          <Title style={{ transform: anim.xyz.interpolate(trans1) }}>
            {title}
          </Title>
        </TitleBox>
        <Tags>
          {technologies.map(tech => (
            <Tag
              key={tech}
              css={`
                ${tw`ml-1 mt-1`}
              `}
              inverted
            >
              {tech}
            </Tag>
          ))}
        </Tags>
      </Box>
    </Link>
  );
};
