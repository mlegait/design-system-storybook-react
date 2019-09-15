/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { action, decorateAction } from '@storybook/addon-actions';
import React from 'react';
import DatePicker from '../../components/DatePicker';
import DatePickerSkeleton from '../../components/DatePicker/DatePicker.Skeleton';
import DatePickerInput from '../../components/DatePickerInput';
import WithState from '../../tools/withState';

// Datepickers last argument contains an instance of flatpickr
// and will cause action logger to enter an infinite loop. Just don't log that argument
const datePickerOnChangeActions = decorateAction([
  args => args.slice(0, args.length - 2),
]);

const props = {
  datePicker: () => ({
    id: 'date-picker',
    light: false,
    onChange: datePickerOnChangeActions('onPickerChange'),
    onClose: action('onClose'),
  }),
  datePickerInput: () => ({
    id: 'date-picker-input-id',
    className: 'some-class',
    labelText: 'Date Picker label',
    pattern: 'd{1,2}/d{4}',
    placeholder: 'mm/dd/yyyy',
    disabled: false,
    invalid: false,
    invalidText: 'A valid value is required',
    iconDescription: 'Icon description',
    onClick: action('onClick'),
    onChange: action('onInputChange'),
  }),
};

export default {
  title: 'Components/Date picker',
  component: DatePicker,
  parameters: {
    componentSubtitle: 'Here is a nice subtitle',
  },
};

export const primary = () => (
  <DatePicker
    {...props.datePicker()}
    datePickerType="single"
    dateFormat={'m/d/Y'}
  >
    <DatePickerInput {...props.datePickerInput()} />
  </DatePicker>
);

export const simple = () => (
  <DatePicker {...props.datePicker()} short={false} datePickerType="simple">
    <DatePickerInput {...props.datePickerInput()} />
  </DatePicker>
);
simple.story = {
  parameters: {
    docs: {
      storyDescription: `
**The simple date picker** is a text input without a calendar. 
You can specify the pattern for the text input to make sure the user enters the 
correct date format. The default regex pattern that ships with the simple date 
picker is \`\d{1,2}/\d{4}\` ('dd/yyyy' for short date pickers) and 
\`\d{1,2}/\d{1,2}/\d{4}\` ('dd/mm/yyyy' or mm/dd/yyyy).
      `,
    },
  },
};

export const singleWithCalendar = () => (
  <DatePicker
    {...props.datePicker()}
    datePickerType="single"
    dateFormat={'m/d/Y'}
  >
    <DatePickerInput {...props.datePickerInput()} />
  </DatePicker>
);
singleWithCalendar.story = {
  parameters: {
    docs: {
      storyDescription: `
**The single date picker** is a text input with a calendar instance attached to it. 
It also ships with a calendar icon inside the input field. The calendar will 
open when the input is focused, and the user can both type in a date or select a 
day from the calendar.
      `,
      // 'A single Date Picker consists of an input field and a calendar.',
    },
  },
};

export const rangeWithCalendar = () => {
  const datePickerInputProps = props.datePickerInput();
  return (
    <DatePicker
      {...props.datePicker()}
      datePickerType="range"
      dateFormat={'m/d/Y'}
    >
      <DatePickerInput
        {...datePickerInputProps}
        id="date-picker-input-id-start"
      />
      <DatePickerInput
        {...datePickerInputProps}
        id="date-picker-input-id-end"
      />
    </DatePicker>
  );
};
rangeWithCalendar.story = {
  parameters: {
    docs: {
      storyDescription:
        '**The ranged date picker** has two text inputs with a ranged calendar instance attached to them.',
    },
  },
};

export const rangeWithCalendarMinMax = () => {
  const datePickerInputProps = props.datePickerInput();
  return (
    <DatePicker
      {...props.datePicker()}
      minDate="1/10/2020"
      maxDate="1/20/2020"
      datePickerType="range"
      dateFormat="m/d/Y"
    >
      <DatePickerInput {...datePickerInputProps} id="date-picker-input-id" />
      <DatePickerInput {...datePickerInputProps} id="date-picker-input-id-2" />
    </DatePicker>
  );
};
rangeWithCalendarMinMax.story = {
  name: 'Range with calendar and min/max dates',
  parameters: {
    docs: {
      storyDescription:
        'A range Date Picker consists of two input fields and a calendar, and optionally, the minDate and maxDate fields.',
    },
  },
};

export const fullyControlled = () => (
  <WithState initialState={{ date: '' }}>
    {({ state, setState }) => (
      <>
        <DatePicker
          datePickerType="single"
          dateFormat="m/d/Y"
          value={state.date}
          onChange={eventOrDates => {
            const value = eventOrDates.target
              ? eventOrDates.target.value
              : eventOrDates[0];
            setState({ date: value });
          }}
        >
          <DatePickerInput
            {...props.datePickerInput()}
            id="date-picker-input-id"
          />
        </DatePicker>
        <button onClick={() => setState({ date: '01/01/2011' })}>
          Click me to set to 01/01/2011
        </button>
      </>
    )}
  </WithState>
);
fullyControlled.story = {
  parameters: {
    docs: {
      storyDescription: `
If your application needs to control the value of the date picker and
be notified of any changes.
        `,
    },
  },
};

export const skeleton = () => <DatePickerSkeleton range />;
skeleton.story = {
  parameters: {
    docs: {
      storyDescription:
        'Placeholder skeleton state to use when content is loading.',
    },
  },
};
