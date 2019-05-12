import { gitHubApiInstance } from '../../utils/requestHelper';
import errorHandler from '../../utils/errorHandler';

export function getRepositoriesByLanguage(params) {
  return gitHubApiInstance({
    url: 'search/repositories',
    method: 'get',
    params,
  })
    .then(({ data }) => data.items)
    .catch(errorHandler);
}
