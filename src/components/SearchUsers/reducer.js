import {
  CLEAR_USER_DETAILS,
  CLEAR_USER_LIST,
  GET_USER_DETAILS_FAIL,
  GET_USER_DETAILS_SUCCESS,
  GET_USER_DETAILS,
  GET_USERS_BY_NAME_FAIL,
  GET_USERS_BY_NAME_SUCCESS,
  GET_USERS_BY_NAME,
} from './actionTypes';

const defaultState = {
  errorMessage: null,
  fetchingDetails: false,
  fetchingList: false,
  userDetails: {},
  usersList: [],
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_USERS_BY_NAME:
      return {
        ...state,
        fetchingList: true,
      };
    case GET_USERS_BY_NAME_FAIL:
      return {
        ...state,
        errorMessage: payload,
        fetchingList: false,
      };
    case GET_USERS_BY_NAME_SUCCESS:
      return {
        ...state,
        usersList: payload,
        fetchingList: false,
      };
    case GET_USER_DETAILS:
      return {
        ...state,
        fetchingDetails: true,
      };
    case GET_USER_DETAILS_FAIL:
      return {
        ...state,
        errorMessage: payload,
        fetchingDetails: false,
      };
    case GET_USER_DETAILS_SUCCESS:
      return {
        ...state,
        userDetails: payload,
        fetchingDetails: false,
      };
    case CLEAR_USER_DETAILS:
      return {
        ...state,
        userDetails: {},
      };
    case CLEAR_USER_LIST:
      return {
        ...state,
        usersList: [],
      };
    default:
      return state;
  }
};
