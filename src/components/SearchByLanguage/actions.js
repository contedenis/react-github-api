import {
  GET_REPOSITORIES_BY_LANGUAGE,
  GET_REPOSITORIES_BY_LANGUAGE_FAIL,
  GET_REPOSITORIES_BY_LANGUAGE_SUCCESS,
} from './actionTypes';

function getRepositoriesByLanguage(payload) {
  return {
    type: GET_REPOSITORIES_BY_LANGUAGE,
    payload,
  };
}

function getRepositoriesByLanguageFail(payload) {
  return {
    type: GET_REPOSITORIES_BY_LANGUAGE_FAIL,
    payload,
  };
}

function getRepositoriesByLanguageSuccess(payload) {
  return {
    type: GET_REPOSITORIES_BY_LANGUAGE_SUCCESS,
    payload,
  };
}

export {
  getRepositoriesByLanguage,
  getRepositoriesByLanguageFail,
  getRepositoriesByLanguageSuccess,
};
