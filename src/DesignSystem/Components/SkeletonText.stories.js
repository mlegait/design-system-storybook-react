/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import SkeletonText from '../../components/SkeletonText';

const props = () => ({
  heading: false,
  paragraph: false,
  lineCount: 3,
  width: '100%',
});

export default {
  title: 'Components/SkeletonText',
  component: SkeletonText,
  parameters: {
    componentSubtitle:
      'Skeleton states are used as a progressive loading state while the user waits for content to load.',
  },
};

export const defaut = () => (
  <div style={{ width: '300px' }}>
    <SkeletonText {...props()} />
  </div>
);
defaut.story = { name: 'Default' };
