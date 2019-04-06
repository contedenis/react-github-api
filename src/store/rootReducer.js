import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form'; // eslint-disable-line

const appReducer = combineReducers({

});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
