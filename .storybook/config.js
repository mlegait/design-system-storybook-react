import { addDecorator, configure } from '@storybook/react';
import React from 'react';
import Container from './Container';

addDecorator(story => <Container story={story} />);

// We want to force the files to load in a specific order.
const loaderFn = () => [
  require('../src/DesignSystem/GetStarted/Design.stories.mdx'),

  require('../src/DesignSystem/Guidelines/Content.stories.mdx'),

  require('../src/DesignSystem/Components/Accordion.stories'),
  require('../src/DesignSystem/Components/Select.stories'),
  require('../src/DesignSystem/Components/SkeletonText.stories'),

  require('../src/stories/Components/Button.stories.mdx'),

  require('../src/DesignSystem/Resources/DesignResources.stories.mdx'),
];

configure(loaderFn, module);
