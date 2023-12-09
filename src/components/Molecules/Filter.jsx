import React from 'react';
import PropTypes from 'prop-types';

import './filter.css';

const Filter = ({ value, onChange }) => (
  <div className="container">
    <input
      className="filter-input"
      type="text"
      placeholder="Filter contacts"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;