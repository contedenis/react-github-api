import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import exploringGitHub from '../../assets/images/exploringGitHub.png';
import git from '../../assets/images/git.png';
import byLanguages from '../../assets/images/byLanguages.png';
import userGit from '../../assets/images/userGit.png';

import * as actions from './actions';
import './styles.scss';

function Home({ getRepository }) {
  useEffect(() => {
    getRepository({ repoName: 'facebook', repo: 'react' });
    getRepository({ repoName: 'reduxjs', repo: 'redux' });
    getRepository({ repoName: 'redux-saga', repo: 'redux-saga' });
  });

  return (
    <div className="dashboard">
      <div className="dashboard__container">
        <div className="dashboard__container-promo">
          <img className="dashboard__card" src={exploringGitHub} alt="git" />
          <div className="dashboard__card-text">
            <h1 className="dashboard__card-text-title">Hello, people</h1>
            <div className="dashboard__card-text-subtitle">
              {`This is a simple application to search for relevant information within github.
              I hope you enjoy it!`}
            </div>
          </div>
        </div>
        <div className="dashboard__container-link">
          <div className="dashboard__card-link">
            <img className="dashboard__card-image" src={git} alt="git" />
            <code>Trending repositories</code>
          </div>
          <div className="dashboard__card-link">
            <img className="dashboard__card-image" src={byLanguages} alt="git" />
            <code>Repositories by languages</code>
          </div>
          <div className="dashboard__card-link">
            <img className="dashboard__card-image" src={userGit} alt="git" />
            <code>Search users</code>
          </div>
        </div>
      </div>
    </div>
  );
}

Home.propTypes = {
  getRepository: PropTypes.func.isRequired,
};

export default connect(null, actions)(Home);
