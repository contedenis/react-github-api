import React from 'react';
import PropTypes from 'prop-types';

import App from '../components/App';

function GitHubApi({ children }) {
  return (
    <App>
      {children}
    </App>
  );
}

GitHubApi.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GitHubApi;
