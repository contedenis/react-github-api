import { combineReducers } from 'redux';
import home from '../components/Home/reducer';
import trendingRepositories from '../components/TrendingRepositories/reducer';
import repositoriesByLanguage from '../components/SearchByLanguage/reducer';
import usersList from '../components/SearchUsers/reducer';

const appReducer = combineReducers({
  home,
  trendingRepositories,
  repositoriesByLanguage,
  usersList,
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
