import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import searchIcon from '../../assets/images/search.svg';
import deleteIcon from '../../assets/images/delete.svg';

import './styles.scss';

function InputSearch({
  className,
  onChange,
  placeholder,
  value,
  disabled,
  onClick,
}) {
  return (
    <div className="input-search__container">
      <div className="input-search__icon-search-container">
        <img src={searchIcon} className="input-search__icon-search" alt="search" />
      </div>
      <input
        type="search"
        className={cn('input-search', className)}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
      />
      <div className="input-search__icon-delete-container" onClick={onClick} role="presentation">
        <img
          alt="search"
          className={cn('input-search__icon-delete', { 'input-search__icon-delete--disabled': disabled })}
          src={deleteIcon}
        />
      </div>
    </div>
  );
}

InputSearch.defaultProps = {
  className: '',
  placeholder: 'Insert a name here..',
  value: '',
  disabled: false,
};

InputSearch.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default InputSearch;
