import { gitHubApiInstance } from '../../utils/requestHelper';
import errorHandler from '../../utils/errorHandler';

export function getRepository(repoName, repo) {
  return gitHubApiInstance({
    url: `repos/${repoName}/${repo}`,
    method: 'get',
  })
    .then(({ data }) => data)
    .catch(errorHandler);
}
