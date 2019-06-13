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

function getUsersByName(payload) {
  return {
    type: GET_USERS_BY_NAME,
    payload,
  };
}

function getUsersByNameFail(payload) {
  return {
    type: GET_USERS_BY_NAME_FAIL,
    payload,
  };
}

function getUsersByNameSuccess(payload) {
  return {
    type: GET_USERS_BY_NAME_SUCCESS,
    payload,
  };
}

function getUserDetails(payload) {
  return {
    type: GET_USER_DETAILS,
    payload,
  };
}

function getUserDetailsFail(payload) {
  return {
    type: GET_USER_DETAILS_FAIL,
    payload,
  };
}

function getUserDetailsSuccess(payload) {
  return {
    type: GET_USER_DETAILS_SUCCESS,
    payload,
  };
}

function clearUsersList() {
  return {
    type: CLEAR_USER_LIST,
  };
}

function clearUserDetails() {
  return {
    type: CLEAR_USER_DETAILS,
  };
}

export {
  clearUserDetails,
  clearUsersList,
  getUserDetails,
  getUserDetailsFail,
  getUserDetailsSuccess,
  getUsersByName,
  getUsersByNameFail,
  getUsersByNameSuccess,
};
