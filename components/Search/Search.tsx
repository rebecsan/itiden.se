import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  connectHits,
  connectSearchBox,
} from 'react-instantsearch-dom';
import { Hit, HitData } from './Hit';
import { useKeyPress } from '../../hooks/useKeyPress';
import { VisuallyHidden } from '../Helpers/VisuallyHidden';
import { animated, useTransition } from 'react-spring';

interface SearchProps {
  show: boolean;
  onRequestClose(): void;
}

const Wrapper = styled(animated.section)`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #fff;
  top: 0;
  left: 0;
  z-index: 100;
`;

const Content = tw.div`flex flex-col max-w-4xl m-auto p-8 pt-16 md:pt-12`;

const searchClient = algoliasearch(
  process.env.ALGOLIA_APP_ID || '',
  process.env.ALGOLIA_SEARCH_KEY || ''
);

const Results = styled.div`
  ${tw`flex flex-col md:flex-row`}
`;
const Section = styled.section`
  ${tw`p-4`}
  flex-basis: 33%;
`;
const SectionTitle = tw.h3`
  text-secondary text-sm uppercase
`;
const SectionList = tw.ul`
  list-none m-0 p-0
`;
const SectionListItem = tw.li`
  mb-2
`;

const Input = styled.input.attrs({
  type: 'search',
})`
  ${tw`border border-transparent shadow focus:shadow-lg focus:bg-gray-100 focus:text-primary text-white rounded bg-gray-800 py-2 pr-4 pl-10 block max-w-xl appearance-none leading-normal w-full mb-12 mx-auto`}
  transition: all .2s;
  &:focus {
    outline: 0;
  }
`;

const Close = styled.button`
  ${tw`absolute bg-transparent border-0 p-0 text-4xl`}
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  opacity: 0.4;
  font-size: 22px;

  &:hover {
    opacity: 1;
  }

  &:before,
  &:after {
    ${tw`bg-gray-900`}
    position: absolute;
    left: 15px;
    top: 6px;
    content: ' ';
    height: 1em;
    width: 2px;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

const HitSection: React.FC<{ title: string; hits: HitData[] }> = ({
  title,
  hits,
}) => {
  return (
    <Section>
      <SectionTitle>{title}</SectionTitle>
      <SectionList>
        {hits.map(hit => (
          <SectionListItem key={hit.objectID}>
            <Hit hit={hit} />
          </SectionListItem>
        ))}
      </SectionList>
    </Section>
  );
};

const Hits = connectHits<HitData>(({ hits }) => {
  const cases = hits.filter(h => h.type === 'case');
  const pages = hits.filter(h => h.type === 'page');
  const employees = hits.filter(h => h.type === 'employee');

  return (
    <Results>
      {cases.length > 0 && <HitSection title="Cases" hits={cases} />}
      {pages.length > 0 && <HitSection title="Sidor" hits={pages} />}
      {employees.length > 0 && (
        <HitSection title="Anställda" hits={employees} />
      )}
    </Results>
  );
});

const SearchBox = connectSearchBox(({ currentRefinement, refine }) => {
  return (
    <Input
      autoFocus
      placeholder="Sök..."
      value={currentRefinement}
      onChange={e => refine(e.currentTarget.value)}
    />
  );
});

export const Search: React.FC<SearchProps> = ({ show, onRequestClose }) => {
  useKeyPress('Escape', onRequestClose, !show);

  const transitions = useTransition(show, null, {
    from: { opacity: 0, top: 50 },
    enter: { opacity: 1, top: 0 },
    leave: { opacity: 0 },
    immediate: !show,
  });

  return (
    <>
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <Wrapper key={key} style={props}>
              <VisuallyHidden as="h2">Sök</VisuallyHidden>
              <Content>
                <InstantSearch indexName="itiden" searchClient={searchClient}>
                  <SearchBox />
                  <Hits />
                </InstantSearch>
              </Content>
              <Close onClick={onRequestClose} />
            </Wrapper>
          )
      )}
    </>
  );
};
