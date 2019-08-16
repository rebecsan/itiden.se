import React from 'react';
import { Employee } from '../../models/Employee';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Logo } from '../Logo';
import { useSpring, animated } from 'react-spring';

interface CardProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  style?: any;
}

const Wrapper = styled.div`
  ${tw`relative inline-block m-2`}
  width: calc(50% - 1rem);
  height: 220px;
  box-sizing: border-box;

  @media (max-width: 640px) {
    ${tw`mx-0`}
    width: 100%;
  }
`;

const Card = styled(({ _css, ...rest }) => <animated.div {...rest} />)`
  ${tw`absolute cursor-pointer bg-gray-900 shadow-md p-4 flex items-center justify-center rounded`}
  width: 100%;
  height: 100%;
  will-change: transform, opacity;
`;

const Content = styled.ul`
  ${tw`font-mono text-sm p-0 m-0 text-white`}
  position: relative;

  &:before {
    content: '{';
    position: absolute;
    top: -20px;
    left: -14px;
  }
  &:after {
    content: '}';
    position: absolute;
    bottom: -10px;
    left: -14px;
  }
`;

const Row = styled.li`
  ${tw`block list-none text-white`}

  &:not(:last-child):after {
    color: #fff;
    content: ',';
  }
`;

const Label = styled.span`
  ${tw`text-orange-600 inline-block font-bold`}

  &:before {
    content: '"';
  }
  &:after {
    content: '":';
  }
`;
const Value = styled.span`
  ${tw`text-white inline-block`}

  &:before {
    content: '"';
  }
  &:last-child:after {
    content: '"';
  }
`;

const Link = styled.a`
  ${tw`text-white inline-block outline-none focus:text-brand`}
`;

export const ProfileCard: React.FC<Employee> = props => {
  const [flipped, setFlipped] = React.useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  function handleClick() {
    setFlipped(state => !state);
  }

  return (
    <Wrapper onClick={handleClick}>
      <CardBack
        style={{
          opacity,
          transform: transform.interpolate(t => `${t} rotateX(180deg)`),
        }}
      />
      <CardFront
        {...props}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        style={{ opacity: opacity.interpolate((o: any) => 1 - o), transform }}
      />
    </Wrapper>
  );
};

export const CardFront: React.FC<Employee & CardProps> = ({
  name,
  title,
  email,
  phone,
  ...rest
}) => {
  return (
    <Card {...rest}>
      <Content>
        <Row>
          <Label>name</Label> <Value>{name}</Value>
        </Row>
        <Row>
          <Label>title</Label> <Value>{title}</Value>
        </Row>
        <Row>
          <Label>email</Label>{' '}
          <Value>
            <Link href={`mailto:${email}`} onClick={e => e.stopPropagation()}>
              {email}
            </Link>
          </Value>
        </Row>
        <Row>
          <Label>phone</Label>{' '}
          <Value>
            {phone && (
              <Link href={`tel:${phone}`} onClick={e => e.stopPropagation()}>
                {phone}
              </Link>
            )}
          </Value>
        </Row>
      </Content>
    </Card>
  );
};

const CardLogo = styled(Logo)`
  ${tw`fill-black`}
  height: 48px;

  @media (max-width: 720px) {
    height: 30px;
  }
`;

export const CardBack: React.FC<CardProps> = props => {
  return (
    <Card
      {...props}
      css={`
        ${tw`bg-brand`}
      `}
    >
      <CardLogo />
    </Card>
  );
};
