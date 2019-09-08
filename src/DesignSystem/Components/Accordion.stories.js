/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { action } from '@storybook/addon-actions';
import React from 'react';
import {
  AccordionItem,
  AccordionSkeleton,
  default as Accordion,
} from '../../components/Accordion';
import Select from '../../components/Select';
import SelectItem from '../../components/SelectItem';

const props = {
  onClick: action('onClick'),
  onHeadingClick: action('onHeadingClick'),
};

export default {
  title: 'Components|Accordion',
  component: Accordion,
  parameters: {
    componentSubtitle:
      'Accordions allow users to expand and collapse sections of content.',
  },
};

export const defaut = () => (
  <Accordion>
    <AccordionItem title="Section 1 title" open={false} {...props}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </AccordionItem>
    <AccordionItem title="Section 2 title" {...props}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </AccordionItem>
    <AccordionItem title="Section 3 title" {...props}>
      <Select
        onChange={action('onChange')}
        id="select-1"
        defaultValue="placeholder-item"
      >
        <SelectItem
          disabled
          hidden
          value="placeholder-item"
          text="Choose an option"
        />
        <SelectItem value="option-1" text="Option 1" />
        <SelectItem value="option-2" text="Option 2" />
        <SelectItem value="option-3" text="Option 3" />
      </Select>
    </AccordionItem>
    <AccordionItem
      title={
        <h4>
          Section 4 title (<em>the title can be a node</em>)
        </h4>
      }
      {...props}
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </AccordionItem>
  </Accordion>
);
defaut.story = { name: 'Default' };

export const skeleton = () => (
  <div style={{ width: '500px' }}>
    <AccordionSkeleton open count={4} />
  </div>
);
