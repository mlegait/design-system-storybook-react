import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Icon } from '../Icon';
import './Button.scss';
import {
  BUTTON_KINDS,
  BUTTON_SIZES,
  BUTTON_SIZE_DEFAULT,
} from './ButtonContants';

const Button = ({ label, onClick, kind, size, icon, disabled }) => (
  <button
    onClick={onClick}
    className={classNames('btn', `btn--${kind}`, `btn--${size}`, {
      'btn--disabled': disabled,
      'btn--iconOnly': !!icon && !label,
    })}
    disabled={disabled}
  >
    {label}
    {icon && (
      <span className="btn__icon">
        <Icon glyph={icon} />
      </span>
    )}
  </button>
);

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  kind: PropTypes.oneOf(BUTTON_KINDS).isRequired,
  size: PropTypes.oneOf(BUTTON_SIZES),
  icon: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  label: '',
  size: BUTTON_SIZE_DEFAULT,
  icon: undefined,
  disabled: false,
};

export default Button;
