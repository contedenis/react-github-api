import { all, fork } from 'redux-saga/effects';

import home from '../components/Home/sagas';
import trendingRepositories from '../components/TrendingRepositories/sagas';

export default function* rootSaga() {
  yield all([
    ...Object.values(home),
    ...Object.values(trendingRepositories),
  ].map(fork));
}
