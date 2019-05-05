import {
  GET_TRENDING_REPOSITORIES,
  GET_TRENDING_REPOSITORIES_FAIL,
  GET_TRENDING_REPOSITORIES_SUCCESS,
} from './actionTypes';

function getTrendingRepositories(payload) {
  return {
    type: GET_TRENDING_REPOSITORIES,
    payload,
  };
}

function getTrendingRepositoriesFail(payload) {
  return {
    type: GET_TRENDING_REPOSITORIES_FAIL,
    payload,
  };
}

function getTrendingRepositoriesSuccess(payload) {
  return {
    type: GET_TRENDING_REPOSITORIES_SUCCESS,
    payload,
  };
}

export {
  getTrendingRepositories,
  getTrendingRepositoriesFail,
  getTrendingRepositoriesSuccess,
};
