/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { action } from '@storybook/addon-actions';
import React from 'react';
import CopyButton from '../../components/CopyButton';

const props = () => ({
  feedback: 'Copied!',
  feedbackTimeout: 3000,
  iconDescription: 'Copy to clipboard',
  onClick: action('onClick'),
});

export default {
  title: 'Components/CopyButton',
  component: CopyButton,
  parameters: {
    componentSubtitle:
      'The copy button can be used when the user needs to copy information, such as a code snippet, to their clipboard.',
  },
};

export const defaut = () => <CopyButton {...props()} />;
defaut.story = { name: 'Default' };
