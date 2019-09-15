/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { action } from '@storybook/addon-actions';
import React from 'react';
import CodeSnippet from '../../components/CodeSnippet';
import CodeSnippetSkeleton from '../../components/CodeSnippet/CodeSnippet.Skeleton';

const props = {
  inline: () => ({
    light: false,
    feedback: 'Feedback Enabled 👍',
    onClick: action('onClick'),
    copyLabel: 'copyable code snippet',
  }),
  single: () => ({
    feedback: 'Feedback Enabled 👍',
    copyButtonDescription: '',
    ariaLabel: '',
    onClick: action('onClick'),
  }),
  multiline: () => ({
    feedback: 'Feedback Enabled 👍',
    showMoreText: 'Show more',
    showLessText: 'Show less',
    onClick: action('onClick'),
  }),
};

export default {
  title: 'Components/CodeSnippet',
  component: CodeSnippet,
  parameters: {
    componentSubtitle:
      'Code snippets are small blocks of reusable code that can be inserted in a code file.',
  },
};

export const inline = () => (
  <div>
    <CodeSnippet type="inline" {...props.inline()}>
      {'node -v'}
    </CodeSnippet>
  </div>
);
inline.story = {
  parameters: {
    docs: {
      storyDescription:
        'The Inline style is for code used within a block of text.',
    },
  },
};

export const singleLline = () => (
  <CodeSnippet type="single" {...props.single()}>
    {
      'node -v Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, veritatis voluptate id incidunt molestiae officia possimus, quasi itaque alias, architecto hic, dicta fugit? Debitis delectus quidem explicabo vitae fuga laboriosam!'
    }
  </CodeSnippet>
);
singleLline.story = {
  parameters: {
    docs: {
      storyDescription:
        'The Code style is for larger, multi-line code snippets.',
    },
  },
};

export const multiLine = () => {
  const multilineProps = props.multiline();
  return (
    <CodeSnippet type="multi" {...multilineProps}>
      {`@mixin grid-container {
  width: 100%;
  padding-right: padding(mobile);
  padding-left: padding(mobile);

  @include breakpoint(bp--xs--major) {
    padding-right: padding(xs);
    padding-left: padding(xs);
  }
}

$z-indexes: (
  modal : 9000,
  overlay : 8000,
  dropdown : 7000,
  header : 6000,
  footer : 5000,
  hidden : - 1,
  overflowHidden: - 1,
  floating: 10000
);`}
    </CodeSnippet>
  );
};
multiLine.story = {
  parameters: {
    docs: {
      storyDescription: 'The Terminal style is for single-line.',
    },
  },
};

export const skeleton = () => (
  <div style={{ width: '800px' }}>
    <CodeSnippetSkeleton type="single" style={{ marginBottom: 8 }} />
    <CodeSnippetSkeleton type="multi" />
  </div>
);
skeleton.story = {
  parameters: {
    docs: {
      storyDescription:
        'Placeholder skeleton state to use when content is loading.',
    },
  },
};
