import { all, fork } from 'redux-saga/effects';

import home from '../components/Home/sagas';

export default function* rootSaga() {
  yield all([
    ...Object.values(home),
  ].map(fork));
}
