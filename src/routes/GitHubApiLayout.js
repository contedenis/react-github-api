import React from 'react';
import PropTypes from 'prop-types';

function GitHubApi({ children }) {
  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
}

GitHubApi.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GitHubApi;
