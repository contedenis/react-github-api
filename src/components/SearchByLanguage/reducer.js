import {
  GET_REPOSITORIES_BY_LANGUAGE,
  GET_REPOSITORIES_BY_LANGUAGE_FAIL,
  GET_REPOSITORIES_BY_LANGUAGE_SUCCESS,
} from './actionTypes';

const defaultState = {
  repositoriesByLanguage: [],
  errorMessage: null,
  fetching: false,
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_REPOSITORIES_BY_LANGUAGE:
      return {
        ...state,
        fetching: true,
      };
    case GET_REPOSITORIES_BY_LANGUAGE_FAIL:
      return {
        ...state,
        errorMessage: payload,
        fetching: false,
      };
    case GET_REPOSITORIES_BY_LANGUAGE_SUCCESS:
      return {
        ...state,
        repositoriesByLanguage: payload,
        fetching: false,
      };
    default:
      return state;
  }
};
