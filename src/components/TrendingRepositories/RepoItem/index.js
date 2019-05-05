import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

function RepoItem({ repo }) {
  return (
    <div className="repo-item">
      <div className="repo-item__container">
        <img className="repo-item__image" src={repo.owner.avatar_url} alt={repo.full_name} />
        <div className="repo-item__data">
          <code>{repo.full_name}</code>
          <code>{repo.description}</code>
          <code>{repo.created_at}</code>
          <code>{repo.updated_at}</code>
          <code>{repo.stargazers_count}</code>
          <code>{repo.forks_count}</code>
          <a href={repo.html_url}>More info ...</a>
        </div>
      </div>
    </div>
  );
}

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
