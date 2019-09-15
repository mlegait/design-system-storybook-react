/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { settings } from 'carbon-components';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { ButtonTypes } from '../../prop-types/types';

const { prefix } = settings;

/**
 * Buttons are used to initialize an action, either in the background or
 * foreground of an experience.
 *
 * There are several kinds of buttons.
 * - **Primary** buttons should be used for the principle call to action on the page.
 * - **Secondary** buttons should be used for secondary actions on each page.
 * - **Danger** buttons should be used for a negative action (such as Delete) on the page.
 * - **Field** buttons may be use directly next to an input element, to visually align their heights.
 * - **Small** buttons may be used when there is not enough space for a
 * regular sized button. This issue is most found in tables. Small button should have three words
 * or less.
 *
 * When words are not enough, **icons** can be used in buttons to better communicate what the button does. Icons are
 * always paired with text.
 *
 * Modify the behavior of the button by changing its event properties.
 */
const Button = React.forwardRef(function Button(
  {
    children,
    as,
    className,
    disabled,
    small,
    size,
    kind,
    href,
    tabIndex,
    type,
    renderIcon: ButtonImageElement,
    iconDescription,
    hasIconOnly,
    tooltipPosition,
    tooltipAlignment,
    ...other
  },
  ref
) {
  const buttonClasses = classNames(className, {
    [`${prefix}--btn`]: true,
    [`${prefix}--btn--field`]: size === 'field',
    [`${prefix}--btn--sm`]: size === 'small' || small,
    [`${prefix}--btn--primary`]: kind === 'primary',
    [`${prefix}--btn--danger`]: kind === 'danger',
    [`${prefix}--btn--secondary`]: kind === 'secondary',
    [`${prefix}--btn--ghost`]: kind === 'ghost',
    [`${prefix}--btn--danger--primary`]: kind === 'danger--primary',
    [`${prefix}--btn--tertiary`]: kind === 'tertiary',
    [`${prefix}--btn--disabled`]: disabled,
    [`${prefix}--btn--icon-only`]: hasIconOnly,
    [`${prefix}--tooltip__trigger`]: hasIconOnly,
    [`${prefix}--tooltip--a11y`]: hasIconOnly,
    [`${prefix}--tooltip--${tooltipPosition}`]: hasIconOnly && tooltipPosition,
    [`${prefix}--tooltip--align-${tooltipAlignment}`]:
      hasIconOnly && tooltipAlignment,
  });

  const commonProps = {
    tabIndex,
    className: buttonClasses,
    ref,
  };

  const buttonImage = !ButtonImageElement ? null : (
    <ButtonImageElement
      aria-label={iconDescription}
      className={`${prefix}--btn__icon`}
      aria-hidden="true"
    />
  );

  let component = 'button';
  let otherProps = {
    disabled,
    type,
  };
  const anchorProps = {
    role: 'button',
    href,
  };
  const assistiveText = hasIconOnly ? (
    <span className={`${prefix}--assistive-text`}>{iconDescription}</span>
  ) : null;
  if (as) {
    component = as;
    otherProps = {
      ...otherProps,
      ...anchorProps,
    };
  } else if (href) {
    component = 'a';
    otherProps = anchorProps;
  }
  return React.createElement(
    component,
    {
      ...other,
      ...commonProps,
      ...otherProps,
    },
    assistiveText,
    children,
    buttonImage
  );
});

Button.propTypes = {
  /**
   * Specify the content of your Button
   */
  children: PropTypes.node,

  /**
   * Specify how the button itself should be rendered.
   * Make sure to apply all props to the root node and render children appropriately
   */
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

  /**
   * Specify an optional className to be added to your Button
   */
  className: PropTypes.string,

  /**
   * Specify whether the Button should be disabled, or not
   */
  disabled: PropTypes.bool,

  /**
   * Specify the size of the button, from a list of available sizes.
   * For `default` buttons, this prop can remain unspecified.
   */
  size: PropTypes.oneOf(['default', 'field', 'small']),

  /**
   * Specify the kind of Button you want to create
   */
  kind: ButtonTypes.buttonKind.isRequired,

  /**
   * Optionally specify an href for your Button to become an <a> element
   */
  href: PropTypes.string,

  /**
   * Optional prop to specify the tabIndex of the Button
   */
  tabIndex: PropTypes.number,

  /**
   * Optional prop to specify the type of the Button
   */
  type: PropTypes.oneOf(['button', 'reset', 'submit']),

  /**
   * Optional prop to specify the role of the Button
   */
  role: PropTypes.string,

  /**
   * Optional prop to allow overriding the icon rendering.
   * Can be a React component class
   */
  renderIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),

  /**
   * If specifying the `renderIcon` prop, provide a description for that icon that can
   * be read by screen readers
   */
  iconDescription: props => {
    if (props.renderIcon && !props.children && !props.iconDescription) {
      return new Error(
        'renderIcon property specified without also providing an iconDescription property.'
      );
    }
    return undefined;
  },

  /**
   * Specify if the button is an icon-only button
   */
  hasIconOnly: PropTypes.bool,

  /**
   * Specify the direction of the tooltip for icon-only buttons.
   * Can be either top, right, bottom, or left.
   */
  tooltipPosition: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),

  /**
   * Specify the alignment of the tooltip to the icon-only button.
   * Can be one of: start, center, or end.
   */
  tooltipAlignment: PropTypes.oneOf(['start', 'center', 'end']),
};

Button.defaultProps = {
  tabIndex: 0,
  type: 'button',
  disabled: false,
  kind: 'primary',
};

export default Button;
