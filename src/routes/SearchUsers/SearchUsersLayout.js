import React from 'react';
import PropTypes from 'prop-types';
import SearchUsers from '../../components/SearchUsers';

function GitHubApi({ params: { user } }) {
  return (
    <SearchUsers user={user} />
  );
}

GitHubApi.propTypes = {
  params: PropTypes.object.isRequired,
};

export default GitHubApi;
