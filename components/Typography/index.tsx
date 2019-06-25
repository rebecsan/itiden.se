import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Title = styled.h1`
  ${tw`text-primary text-4xl`}
  transition: color .2s;
`;

export const Body = styled.div`
  ${tw`font-mono text-secondary text-lg`}
  transition: color .2s;
`;