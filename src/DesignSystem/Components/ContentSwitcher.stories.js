/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { action } from '@storybook/addon-actions';
import React from 'react';
import ContentSwitcher from '../../components/ContentSwitcher';
import Switch from '../../components/Switch';

const props = {
  contentSwitcher: () => ({
    onChange: action('onChange'),
  }),
  switch: () => ({
    onClick: action('onClick - Switch'),
    disabled: false,
  }),
};

export default {
  title: 'Components/ContentSwitcher',
  component: ContentSwitcher,
  parameters: {
    componentSubtitle: `
    The Content Switcher component manipulates the content shown following an exclusive or “either/or” pattern.
    Create Switch components for each section in the content switcher.
  `,
  },
};

export const defaut = () => {
  const switchProps = props.switch();
  return (
    <ContentSwitcher {...props.contentSwitcher()} selectedIndex={0}>
      <Switch text="First section" {...switchProps} />
      <Switch text="Second section" {...switchProps} />
      <Switch text="Third section" {...switchProps} />
    </ContentSwitcher>
  );
};
defaut.story = { name: 'Default' };

export const selected = () => {
  const switchProps = props.switch();
  return (
    <ContentSwitcher {...props.contentSwitcher()} selectedIndex={1}>
      <Switch text="First section" {...switchProps} />
      <Switch text="Second section" {...switchProps} />
      <Switch text="Third section" {...switchProps} />
    </ContentSwitcher>
  );
};
selected.story = {
  parameters: {
    docs: {
      storyDescription:
        'Render the Content Switcher with a different section automatically selected',
    },
  },
};
