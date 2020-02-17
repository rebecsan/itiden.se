import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Line = styled.div`
  ${tw`hidden lg:block`};
  height: 105%;
  border-left: 3px solid #fff;
  transform: rotate(-15deg) translateY(-10px);
  position: absolute;
  left: 50%;
`;
