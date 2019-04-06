import axios from 'axios';

const GITHUB_API = {
  url: 'https://api.github.com',
};

const gitHubApi = () => {
  const instance = axios.create({
    baseURL: GITHUB_API.url,
  });
  return instance;
};

const gitHubApiInstance = gitHubApi();

export {
  gitHubApiInstance,
};
