/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { action } from '@storybook/addon-actions';
import { settings } from 'carbon-components';
import React from 'react';
import Checkbox from '../../components/Checkbox';
import CheckboxSkeleton from '../../components/Checkbox/Checkbox.Skeleton';

const { prefix } = settings;

const props = () => ({
  className: 'some-class',
  labelText: 'Checkbox label',
  indeterminate: false,
  disabled: false,
  hideLabel: false,
  wrapperClassName: '',
  onChange: action('onChange'),
});

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    componentSubtitle: `
    Checkboxes are used when there is a list of options and the user may select multiple options, including all or none.
    The example below shows how the Checkbox component can be used as an uncontrolled component that is initially checked
    by setting the defaultChecked property to true. To use the component in a controlled way, you should set the
    checked property instead.
  `,
  },
};

export const checked = () => {
  const checkboxProps = props();
  return (
    <fieldset className={`${prefix}--fieldset`}>
      <legend className={`${prefix}--label`}>Checkbox heading</legend>
      <Checkbox defaultChecked {...checkboxProps} id="checkbox-label-1" />
      <Checkbox defaultChecked {...checkboxProps} id="checkbox-label-2" />
    </fieldset>
  );
};

export const unchecked = () => {
  const checkboxProps = props();
  return (
    <fieldset className={`${prefix}--fieldset`}>
      <legend className={`${prefix}--label`}>Checkbox heading</legend>
      <Checkbox {...checkboxProps} id="checkbox-label-1" />
      <Checkbox {...checkboxProps} id="checkbox-label-2" />
    </fieldset>
  );
};

export const skeleton = () => (
  <div>
    <CheckboxSkeleton />
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
