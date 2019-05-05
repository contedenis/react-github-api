import React from 'react';
import PropTypes from 'prop-types';

import CircularProgress from '@material-ui/core/CircularProgress';

function Spinner({ className }) {
  return (
    <div className={className}>
      <CircularProgress />
    </div>
  );
}

Spinner.defaultProps = {
  className: '',
};


Spinner.propTypes = {
  className: PropTypes.string,
};

export default Spinner;
