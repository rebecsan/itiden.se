import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

interface TagProps {
  children: string;
}

interface TagsProps {
  tags: string[];
}

const Box = styled.div<TagProps>`
  ${tw`py-1 px-3 sm:py-2 sm:px-6 rounded-full bg-brand-light inline-block text-gray-700`};
`;

export const Tag: React.FC<TagProps> = ({ children, ...rest }) => {
  return <Box {...rest}>{children}</Box>;
};

export const Tags: React.FC<TagsProps> = ({ tags }) => {
  return (
    <>
      {tags.map(tag => (
        <Tag
          key={tag}
          css={`
            ${tw`mr-1 mb-1`}
          `}
        >
          {tag}
        </Tag>
      ))}
    </>
  );
};
