import { addDecorator, configure } from '@storybook/react';
import React from 'react';
import Container from './Container';

addDecorator(story => <Container story={story} />);

// We want to force the files to load in a specific order.
const loaderFn = () => [
  require('../src/stories/Guidelines/Content.stories.mdx'),
  require('../src/components/Accordion/Accordion.stories'),
  require('../src/stories/Components/Button.stories.mdx'),
  require('../src/stories/Components/Link.stories.js'),
  require('../src/stories/Resources/DesignResources.stories.mdx'),
];

configure(loaderFn, module);
