import { combineReducers } from 'redux';
import home from '../components/Home/reducer';
import trendingRepositories from '../components/TrendingRepositories/reducer';

const appReducer = combineReducers({
  home,
  trendingRepositories,
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
