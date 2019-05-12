import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './styles.scss';

function InputSelect({
  className,
  onChange,
  options,
  placeholder,
  value,
}) {
  return (
    <select
      type="select"
      className={cn('select-repositories', className)}
      value={value}
      onChange={e => onChange(e.target.value)}
    >
      <option disabled selected value="">{placeholder}</option>
      {options.length > 0 && options.map((option, key) => (
        <option key={key} value={option.value}>{option.displayValue}</option>
      ))
      }
    </select>
  );
}

InputSelect.defaultProps = {
  className: '',
  placeholder: 'Select an option',
  value: '',
};

InputSelect.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

export default InputSelect;
