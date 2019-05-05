import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './styles.scss';
import { params } from './constants';
import { selectTrendingRepositories } from './selectors';
import * as actions from './actions';
import RepoItem from './RepoItem';

import trendingRepositoriesImg from '../../assets/images/trendingRepositories.jpg';

function TrendingRepositories({ getTrendingRepositories, trendingRepositories }) {
  function handleMount() {
    getTrendingRepositories({ params });
  }

  useEffect(handleMount, []);

  return (
    <div className="trending-repositories">
      <img className="trending-repositories__image" src={trendingRepositoriesImg} alt="trending repositories" />
      {trendingRepositories && trendingRepositories.map((repo, key) => (
        <RepoItem repo={repo} key={key} />
      ))}
    </div>
  );
}

TrendingRepositories.defaultProps = {
  trendingRepositories: [],
};

TrendingRepositories.propTypes = {
  getTrendingRepositories: PropTypes.func.isRequired,
  trendingRepositories: PropTypes.array,
};

const mapStateToProps = state => ({
  trendingRepositories: selectTrendingRepositories(state),
});

export default connect(mapStateToProps, actions)(TrendingRepositories);
