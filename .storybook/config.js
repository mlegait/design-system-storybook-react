import { addDecorator, configure } from '@storybook/react';
import React from 'react';
import Container from './Container';

addDecorator(story => <Container story={story} />);

// We want to force the files to load in a specific order.
const loaderFn = () => [
  require('../src/DesignSystem/GetStarted/AboutCarbon.stories.mdx'),
  require('../src/DesignSystem/GetStarted/Design.stories.mdx'),
  require('../src/DesignSystem/GetStarted/Develop.stories.mdx'),

  require('../src/DesignSystem/Tutorial/React.stories.mdx'),
  require('../src/DesignSystem/Tutorial/Vue.stories.mdx'),

  require('../src/DesignSystem/Guidelines/Content.stories.mdx'),

  require('../src/DesignSystem/Components/Overview.stories.mdx'),
  require('../src/DesignSystem/Components/ComponentStatus.stories.mdx'),
  require('../src/DesignSystem/Components/Accordion.stories'),
  require('../src/DesignSystem/Components/Breadcrumb.stories'),
  require('../src/DesignSystem/Components/Button.stories'),
  require('../src/DesignSystem/Components/Checkbox.stories'),
  require('../src/DesignSystem/Components/CodeSnippet.stories'),
  require('../src/DesignSystem/Components/CopyButton.stories'),
  require('../src/DesignSystem/Components/Link.stories'),
  require('../src/DesignSystem/Components/Select.stories'),
  require('../src/DesignSystem/Components/SkeletonText.stories'),

  require('../src/DesignSystem/Patterns/Overview.stories.mdx'),

  require('../src/DesignSystem/Experimental/Overview.stories.mdx'),

  // require('../src/stories/Components/Button.stories.mdx'),

  require('../src/DesignSystem/Resources.stories.mdx'),

  require('../src/DesignSystem/Contributions/Overview.stories.mdx'),

  require('../src/DesignSystem/Updates/WhatsNew.stories.mdx'),

  require('../src/DesignSystem/Help/Support.stories.mdx'),
];

configure(loaderFn, module);
