import {
  GET_TRENDING_REPOSITORIES,
  GET_TRENDING_REPOSITORIES_FAIL,
  GET_TRENDING_REPOSITORIES_SUCCESS,
} from './actionTypes';

const defaultState = {
  repositories: [],
  errorMessage: null,
  fetching: false,
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_TRENDING_REPOSITORIES:
      return {
        ...state,
        fetching: true,
      };
    case GET_TRENDING_REPOSITORIES_FAIL:
      return {
        ...state,
        errorMessage: payload,
        fetching: false,
      };
    case GET_TRENDING_REPOSITORIES_SUCCESS:
      return {
        ...state,
        repositories: payload,
        fetching: false,
      };
    default:
      return state;
  }
};
