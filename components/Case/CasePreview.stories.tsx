import React from 'react';
import { storiesOf } from '@storybook/react';
import { data } from '../../data/data';
import { CasePreview } from './CasePreview';
import { CaseGrid } from './CaseGrid';

const { cases } = data;

storiesOf('CasePreview', module)
  .add('Default', () => <CasePreview {...cases[0]} />)
  .add('Grid', () => (
    <div style={{ marginTop: '100px' }}>
      <CaseGrid cases={cases} />
    </div>
  ));
