import HOME_ROUTE from './Home/route';
import home from './Home';
import trendingRepositories from './TrendingRepositories';
import searchByLanguage from './SearchByLanguage';
import searchUsers from './SearchUsers';
import GitHubApiLayout from './GitHubApiLayout';

export default {
  path: '/',
  component: GitHubApiLayout,
  indexRoute: { onEnter: (nextState, replace) => replace(`/${HOME_ROUTE.route}`) },
  childRoutes: [
    home,
    trendingRepositories,
    searchByLanguage,
    searchUsers,
  ],
};
