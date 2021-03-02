import React from 'react';
import PropTypes from 'prop-types';

import Style from './Style';

const StylesDisplay = ({ styles }) => (
  <div className="StylesDisplay">
    styles: selected style
    {styles.map((style) => (
      <Style style={style} />
    ))}
  </div>
);

StylesDisplay.propTypes = {
  styles: PropTypes.arrayOf(PropTypes.shape({
    style_id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    original_price: PropTypes.string.isRequired,
    sale_price: PropTypes.string,
    default: PropTypes.bool.isRequired,
    photos: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
    skus: PropTypes.objectOf(PropTypes.object).isRequired,
  })).isRequired,
};

export default StylesDisplay;
