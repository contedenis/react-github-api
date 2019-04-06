import { call, put, takeEvery } from 'redux-saga/effects';

import {
  getRepositoryFail,
  getRepositorySuccess,
} from './actions';

import {
  GET_REPOSITORY,
} from './actionTypes';

import {
  getRepository,
} from './api';

function* getRepositoryWorker({ payload: { repoName, repo } }) {
  try {
    const payload = yield call(getRepository, repoName, repo);
    yield put(getRepositorySuccess(payload));
  } catch ({ message }) {
    yield put(getRepositoryFail(message));
  }
}

export function* repositoriesWatcher() {
  yield takeEvery(GET_REPOSITORY, getRepositoryWorker);
}

export default {
  repositoriesWatcher,
};
