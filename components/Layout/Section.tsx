import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { ReactNode } from 'react';
import { Line } from './Line';

const Container = styled.div`
  ${tw`bg-gray-4b text-gray-f0 flex flex-col-reverse relative lg:flex-row mb-12 md:mb-16`};
  @media (min-width: 1024px) {
    height: 424px;
  }
`;

const HalfContent = styled.div`
  ${tw`w-full px-4 py-8 flex justify-center flex-col max-h-full`};
  @media (min-width: 1024px) {
    max-width: 600px;
  }
`;

const Half = styled.div`
  ${tw`flex flex-1 h-full justify-end items-center relative`};

  ${HalfContent} {
    ${tw`pr-12`};
  }
`;

const HalfRight = styled(Half)`
  ${tw`flex flex-1 h-full justify-start items-center relative`};

  ${HalfContent} {
    ${tw`pl-12 pb-0`};
  }
`;

interface SectionProps {
  left: ReactNode;
  right: ReactNode;
}

export const Section: React.FC<SectionProps> = (props: SectionProps) => (
  <Container role="complementary">
    <Line />
    <Half>
      <HalfContent>{props.left}</HalfContent>
    </Half>
    <HalfRight>
      <HalfContent>{props.right}</HalfContent>
    </HalfRight>
  </Container>
);
