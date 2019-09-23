import PropTypes from 'prop-types';
import React from 'react';
import './CardsGrid.scss';

const CardsGrid = ({ children }) => <div className="cardGrid">{children}</div>;

CardsGrid.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardsGrid;
