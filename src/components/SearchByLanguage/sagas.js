import { call, put, takeLatest } from 'redux-saga/effects';

import {
  getRepositoriesByLanguageFail,
  getRepositoriesByLanguageSuccess,
} from './actions';

import {
  GET_REPOSITORIES_BY_LANGUAGE,
} from './actionTypes';

import {
  getRepositoriesByLanguage,
} from './api';

function* getRepositoriesByLanguageWorker({ payload: { params } }) {
  try {
    const payload = yield call(getRepositoriesByLanguage, params);
    yield put(getRepositoriesByLanguageSuccess(payload));
  } catch ({ message }) {
    yield put(getRepositoriesByLanguageFail(message));
  }
}

export function* repositoriesByLanguageWatcher() {
  yield takeLatest(GET_REPOSITORIES_BY_LANGUAGE, getRepositoriesByLanguageWorker);
}

export default {
  repositoriesByLanguageWatcher,
};
