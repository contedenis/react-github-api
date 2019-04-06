import {
  GET_REPOSITORY,
  GET_REPOSITORY_FAIL,
  GET_REPOSITORY_SUCCESS,
} from './actionTypes';

const defaultState = {
  repositories: {},
  errorMessage: null,
  fetching: false,
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_REPOSITORY:
      return {
        ...state,
        fetching: true,
      };
    case GET_REPOSITORY_FAIL:
      return {
        ...state,
        errorMessage: payload,
        fetching: false,
      };
    case GET_REPOSITORY_SUCCESS:
      return {
        ...state,
        repositories: {
          ...state.repositories,
          [payload.name]: payload,
        },
        fetching: false,
      };
    default:
      return state;
  }
};
