import PropTypes from 'prop-types';
import React from 'react';
import './CardsGrid.scss';

export const GRID_GAP_SMALL = '3px';
export const GRID_GAP_MEDIUM = '10px';
export const GRID_GAP_LARGE = '30px';

const GRID_GAPS = [GRID_GAP_SMALL, GRID_GAP_MEDIUM];

const CardsGrid = ({ gridGap, children }) => (
  <div className="cardGrid" style={{ gap: gridGap }}>
    {children}
  </div>
);

CardsGrid.propTypes = {
  gridGap: PropTypes.oneOf(GRID_GAPS),
  children: PropTypes.node.isRequired,
};

CardsGrid.defaultProps = {
  gridGap: GRID_GAP_SMALL,
};

export default CardsGrid;
