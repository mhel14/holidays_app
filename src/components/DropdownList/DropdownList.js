import React from 'react';
import { PropTypes } from 'prop-types';

import { Select } from 'antd';

const DropdownList = ({
  children, year = 'all', setYear, hasError,
}) => (
  <div>
    <span style={{ marginBottom: '4px' }}>Select year: </span>
    <Select
      disabled={hasError}
      value={year}
      style={{ width: 120, textAlign: 'left' }}
      onChange={setYear}
    >
      {children}
    </Select>
  </div>
);

DropdownList.propTypes = {
  children: PropTypes.node.isRequired,
  year: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  setYear: PropTypes.func.isRequired,
  hasError: PropTypes.bool.isRequired,
};

export default DropdownList;
