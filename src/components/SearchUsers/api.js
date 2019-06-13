import { gitHubApiInstance } from '../../utils/requestHelper';
import errorHandler from '../../utils/errorHandler';

export function getUsersByName(params) {
  return gitHubApiInstance({
    url: '/search/users',
    method: 'get',
    params,
  })
    .then(({ data }) => data.items)
    .catch(errorHandler);
}

export function getUserDetails(user) {
  return gitHubApiInstance({
    url: `/users/${user}`,
    method: 'get',
  })
    .then(({ data }) => data)
    .catch(errorHandler);
}
