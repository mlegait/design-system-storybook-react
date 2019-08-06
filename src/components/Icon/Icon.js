import PropTypes from 'prop-types';
import React from 'react';
import { allIconNames, allIcons } from './glyphs';
import './Icon.scss';

const Icon = ({ glyph }) => {
  const IconClass = allIcons[glyph];
  return IconClass ? (
    <>
      <IconClass className="icon" aria-hidden="true" />
    </>
  ) : null;
};

Icon.propTypes = {
  glyph: PropTypes.oneOf(allIconNames).isRequired,
};

export default Icon;
