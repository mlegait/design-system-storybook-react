import { text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import Link from '../../components/Link/Link';

export default {
  title: 'Components|Navigation/Link',
  component: Link,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle:
      'Links are used primarily as a navigational element. Links may also change what or how data is displayed (i.e., view more, show all). If the action taken by the user will change or manipulate data, use a button.',
  },
};

export const link = () => (
  <Link href={text('href', 'https://storybook.js.org/')}>
    Storybook official website
  </Link>
);
