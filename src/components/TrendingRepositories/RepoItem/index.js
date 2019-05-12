import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Popup } from 'semantic-ui-react';


import './styles.scss';

function RepoItem({ repo }) {
  return (
    <div className="repo-item">
      <div className="repo-item__container">
        <img className="repo-item__image" src={repo.owner.avatar_url} alt={repo.full_name} />
        <div className="repo-item__data">
          <div className="repo-item__left" />
          <Popup
            content="Click here if you want to go to the repo"
            inverted
            position="bottom left"
            trigger={<a className="repo-item__title" href={repo.html_url}>{repo.full_name}</a>}
          />
          <h5 className="repo-item__description">{repo.description}</h5>
          <div className="repo-item__description-info-container">
            <div className="repo-item__description-info">
              <div className="repo-item__description-info__label">Stars</div>
              <h5 className="repo-item__description-info__data">{repo.stargazers_count}</h5>
            </div>
            <div className="repo-item__description-info">
              <div className="repo-item__description-info__label">Forks</div>
              <h5 className="repo-item__description-info__data">{repo.forks_count}</h5>
            </div>
            <div className="repo-item__description-info">
              <div className="repo-item__description-info__label">Created</div>
              <h5 className="repo-item__description-info__data">{` ${moment(repo.created_at).format('ddd, MMMM Do YYYY')}`}</h5>
            </div>
            <div className="repo-item__description-info">
              <div className="repo-item__description-info__label">Updated</div>
              <h5 className="repo-item__description-info__data">{` ${moment(repo.updated_at).format('ddd, MMMM Do YYYY')}`}</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="repo-item__divider" />
    </div>
  );
}

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
