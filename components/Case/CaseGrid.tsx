import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { Case } from '../../models/Case';
import { CasePreview } from './CasePreview';

interface CaseGridProps {
  cases: Case[];
}

const Box = styled.div`
  ${tw`w-full flex flex-wrap m-auto mt-10 justify-between`}
  max-width: 1080px;
`;

export const CaseGrid: React.FC<CaseGridProps> = ({ cases }) => {
  return (
    <Box>
      {cases.map((data, i) => (
        <CasePreview key={data.slug} index={i} {...data} />
      ))}
    </Box>
  );
};
