import { call, put, takeLatest } from 'redux-saga/effects';

import {
  getUserDetailsFail,
  getUserDetailsSuccess,
  getUsersByNameFail,
  getUsersByNameSuccess,
} from './actions';

import {
  GET_USER_DETAILS,
  GET_USERS_BY_NAME,
} from './actionTypes';

import {
  getUserDetails,
  getUsersByName,
} from './api';

function* getUsersByNameWorker({ payload: { params } }) {
  try {
    const payload = yield call(getUsersByName, params);
    yield put(getUsersByNameSuccess(payload));
  } catch ({ message }) {
    yield put(getUsersByNameFail(message));
  }
}

function* getUserDetailsWorker({ payload: { user } }) {
  try {
    const payload = yield call(getUserDetails, user);
    yield put(getUserDetailsSuccess(payload));
  } catch ({ message }) {
    yield put(getUserDetailsFail(message));
  }
}

export function* usersByNameWatcher() {
  yield takeLatest(GET_USERS_BY_NAME, getUsersByNameWorker);
  yield takeLatest(GET_USER_DETAILS, getUserDetailsWorker);
}

export default {
  usersByNameWatcher,
};
