import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

function Body({ children }) {
	return (
		<div className="body">
			{children}
		</div>
	);
};

Body.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Body;
