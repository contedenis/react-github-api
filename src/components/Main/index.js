import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

function Main({ children }) {
  return (
    <div className="main">
      {children}
    </div>
  );
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
