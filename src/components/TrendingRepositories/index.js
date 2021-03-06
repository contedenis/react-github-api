import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Spinner from '../Spinner';
import trendingRepositoriesImg from '../../assets/images/trendingRepositories.jpg';

import './styles.scss';
import { params } from './constants';
import { selectTrendingRepositories, selectFetching } from './selectors';
import * as actions from './actions';
import RepoItem from '../RepoItem';

function TrendingRepositories({ fetching, getTrendingRepositories, trendingRepositories }) {
  function handleMount() {
    getTrendingRepositories({ params });
  }

  useEffect(handleMount, []);

  return (
    <div className="trending-repositories">
      <img className="trending-repositories__image" src={trendingRepositoriesImg} alt="trending repositories" />
      {fetching
        ? (
          <Spinner className="trending-repositories__spinner" />
        ) : (
          trendingRepositories && trendingRepositories.map((repo, key) => (
            <RepoItem repo={repo} key={key} />
          ))
        )}
    </div>
  );
}

TrendingRepositories.defaultProps = {
  trendingRepositories: [],
};

TrendingRepositories.propTypes = {
  fetching: PropTypes.bool.isRequired,
  getTrendingRepositories: PropTypes.func.isRequired,
  trendingRepositories: PropTypes.array,
};

const mapStateToProps = state => ({
  fetching: selectFetching(state),
  trendingRepositories: selectTrendingRepositories(state),
});

export default connect(mapStateToProps, actions)(TrendingRepositories);
