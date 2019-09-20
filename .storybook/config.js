import { addDecorator, configure } from '@storybook/react';
import React from 'react';
import Container from './Container';

addDecorator(story => <Container story={story} />);

const componentStories = require.context(
  '../src/DesignSystem/Components/',
  true,
  /\.stories\.(js|mdx)$/
);

// We want to force the files to load in a specific order.
const loaderFn = () => [
  require('../src/DesignSystem/GetStarted/AboutCarbon.stories.mdx'),
  require('../src/DesignSystem/GetStarted/Design.stories.mdx'),
  require('../src/DesignSystem/GetStarted/Develop.stories.mdx'),

  require('../src/DesignSystem/Tutorial/React.stories.mdx'),
  require('../src/DesignSystem/Tutorial/Vue.stories.mdx'),

  require('../src/DesignSystem/Guidelines/Accessibility.stories.mdx'),
  require('../src/DesignSystem/Guidelines/Content.stories.mdx'),

  // Some magic to load component stories sorted alphabetically
  ...componentStories.keys().map(filename => componentStories(filename)),

  require('../src/DesignSystem/Patterns/Overview.stories.mdx'),

  require('../src/DesignSystem/Experimental/Overview.stories.mdx'),

  require('../src/DesignSystem/Resources.stories.mdx'),

  require('../src/DesignSystem/Contributions/Overview.stories.mdx'),

  require('../src/DesignSystem/Updates/WhatsNew.stories.mdx'),

  require('../src/DesignSystem/Help/Support.stories.mdx'),
];

configure(loaderFn, module);
