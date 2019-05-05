import { call, put, takeLatest } from 'redux-saga/effects';

import {
  getTrendingRepositoriesFail,
  getTrendingRepositoriesSuccess,
} from './actions';

import {
  GET_TRENDING_REPOSITORIES,
} from './actionTypes';

import {
  getTrendingRepositories,
} from './api';

function* getTrendingRepositoriesWorker({ payload: { params } }) {
  try {
    const payload = yield call(getTrendingRepositories, params);
    yield put(getTrendingRepositoriesSuccess(payload));
  } catch ({ message }) {
    yield put(getTrendingRepositoriesFail(message));
  }
}

export function* repositoriesWatcher() {
  yield takeLatest(GET_TRENDING_REPOSITORIES, getTrendingRepositoriesWorker);
}

export default {
  repositoriesWatcher,
};
