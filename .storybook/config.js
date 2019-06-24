import { configure, addDecorator } from '@storybook/react';
import { GlobalStyles } from '../components/Styles';

// automatically import all files ending in *.stories.js
const req = require.context('../components', true, /\.stories\.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(story => (
  <>
    <GlobalStyles />
    {story()}
  </>
));

configure(loadStories, module);
