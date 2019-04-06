import {
  GET_REPOSITORY,
  GET_REPOSITORY_FAIL,
  GET_REPOSITORY_SUCCESS,
} from './actionTypes';

function getRepository(payload) {
  return {
    type: GET_REPOSITORY,
    payload,
  };
}

function getRepositoryFail(payload) {
  return {
    type: GET_REPOSITORY_FAIL,
    payload,
  };
}

function getRepositorySuccess(payload) {
  return {
    type: GET_REPOSITORY_SUCCESS,
    payload,
  };
}

export {
  getRepository,
  getRepositoryFail,
  getRepositorySuccess,
};
