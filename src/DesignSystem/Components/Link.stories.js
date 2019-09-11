/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { action } from '@storybook/addon-actions';
import React from 'react';
import Link from '../../components/Link';

const props = () => ({
  className: 'some-class',
  href: '#',
  onClick: (handler => evt => {
    evt.preventDefault(); // Prevent link from being followed for demo purpose
    handler(evt);
  })(action('onClick')),
  disabled: false,
});

export default {
  title: 'Components/Link',
  component: Link,
  parameters: {
    componentSubtitle: `
    Links are typically used as a means of navigation either within the application, to a place outside, or to a resource.
    For anything else, especially things that change data, you should be using a button.
  `,
  },
};

export const defaut = () => <Link {...props()}>Link</Link>;
defaut.story = { name: 'Default' };
