import { all, fork } from 'redux-saga/effects';

import home from '../components/Home/sagas';
import trendingRepositories from '../components/TrendingRepositories/sagas';
import repositoriesByLanguage from '../components/SearchByLanguage/sagas';

export default function* rootSaga() {
  yield all([
    ...Object.values(home),
    ...Object.values(trendingRepositories),
    ...Object.values(repositoriesByLanguage),
  ].map(fork));
}
