import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Button = styled.a`
  ${tw`inline-block bg-purple-700 text-white py-2 px-16 mb-10 text-xl no-underline leading-relaxed rounded-full hover:shadow-md hover:text-white hover:no-underline whitespace-no-wrap`}
  @media (max-width: 640px) {
    ${tw`mt-3 text-base py-1 px-10`}
  }
`;
