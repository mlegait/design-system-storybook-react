/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { action } from '@storybook/addon-actions';
import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbSkeleton,
} from '../../components/Breadcrumb';

const props = () => ({
  className: 'some-class',
  noTrailingSlash: false,
  onClick: action('onClick'),
});

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    componentSubtitle:
      'Breadcrumb enables users to quickly see their location within a path of navigation and move up to a parent level if desired.',
  },
};

export const defaut = () => (
  <Breadcrumb {...props()}>
    <BreadcrumbItem>
      <a href="/#">Breadcrumb 1</a>
    </BreadcrumbItem>
    <BreadcrumbItem href="#">Breadcrumb 2</BreadcrumbItem>
    <BreadcrumbItem href="#">Breadcrumb 3</BreadcrumbItem>
  </Breadcrumb>
);
defaut.story = { name: 'Default' };

export const skeleton = () => <BreadcrumbSkeleton />;
skeleton.story = {
  parameters: {
    docs: {
      storyDescription:
        'Placeholder skeleton state to use when content is loading.',
    },
  },
};

export const currentPage = () => (
  <Breadcrumb {...props()} noTrailingSlash>
    <BreadcrumbItem>
      <a href="/#">Breadcrumb 1</a>
    </BreadcrumbItem>
    <BreadcrumbItem href="#">Breadcrumb 2</BreadcrumbItem>
    <BreadcrumbItem href="#" isCurrentPage>
      Breadcrumb 3
    </BreadcrumbItem>
  </Breadcrumb>
);
currentPage.story = {
  parameters: {
    docs: {
      storyDescription:
        'You can specify a BreadcrumbItem component as the current page with the `isCurrentPage` prop',
    },
  },
};

export const currentPageAriaCurrent = () => (
  <Breadcrumb {...props()} noTrailingSlash>
    <BreadcrumbItem>
      <a href="/#">Breadcrumb 1</a>
    </BreadcrumbItem>
    <BreadcrumbItem href="#">Breadcrumb 2</BreadcrumbItem>
    <BreadcrumbItem href="#" aria-current="page">
      Breadcrumb 3
    </BreadcrumbItem>
  </Breadcrumb>
);
currentPageAriaCurrent.story = {
  name: 'Current page with aria-current',
  parameters: {
    docs: {
      storyDescription:
        'You can specify a BreadcrumbItem component as the current page with the `aria-current` prop by specifying `aria-current="page"`',
    },
  },
};
