import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

interface TagProps {
  children: string;
}

interface TagsProps {
  tags: string[];
}

const Box = styled.div<TagProps>`
  ${tw`mt-4 py-1 px-3 inline-block text-xs text-gray-300 leading-snug bg-gray-600`};
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
            ${tw`mr-4 mb-4 whitespace-no-wrap`}
          `}
        >
          {tag}
        </Tag>
      ))}
    </>
  );
};
