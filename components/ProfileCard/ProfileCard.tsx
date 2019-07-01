import React from 'react';
import { Employee } from '../../models/Employee';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import logo from '../../static/logo.svg';
import { useSpring, animated } from 'react-spring';

interface CardProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  style?: any;
}

const Wrapper = styled.div`
  ${tw`relative inline-block m-2`}
  width: 360px;
  height: 220px;
`;
const Card = styled(animated.div)`
  ${tw`absolute cursor-pointer bg-gray-900 shadow-md p-4 flex items-center justify-center rounded`}
  width: 360px;
  height: 220px;
  will-change: transform, opacity;
`;

const Content = styled.dl`
  ${tw`font-mono text-sm m-0`}
  position: relative;
  &:before {
    ${tw`text-gray-500`}
    content: '{';
    position: absolute;
    top: -20px;
    left: -14px;
  }
  &:after {
    ${tw`text-gray-500`}
    content: '}';
    position: absolute;
    bottom: -10px;
    left: -14px;
  }
`;

const Label = styled.dt`
  ${tw`text-brand inline-block`}

  &:before {
    content: '"';
  }
  &:after {
    content: '":';
  }
`;
const Value = styled.dd`
  ${tw`text-white inline-block`}
  &:before {
    content: '"';
  }
  &:not(:last-child):after {
    content: '",';
  }
  &:last-child:after {
    content: '"';
  }
`;

const Link = styled.a`
  ${tw`text-white inline-block`}
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
        style={{ opacity: opacity.interpolate(o => 1 - o), transform }}
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
        <Label>name</Label> <Value>{name}</Value>
        <br />
        <Label>title</Label> <Value>{title}</Value>
        <br />
        <Label>email</Label>{' '}
        <Value>
          <Link href={`mailto:${email}`} onClick={e => e.stopPropagation()}>
            {email}
          </Link>
        </Value>
        <br />
        <Label>phone</Label>{' '}
        <Value>
          <Link href={`tel:${phone}`} onClick={e => e.stopPropagation()}>
            {phone}
          </Link>
        </Value>
      </Content>
    </Card>
  );
};

const Logo = styled.img`
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
      <Logo src={logo} alt="itiden logga" />
    </Card>
  );
};
