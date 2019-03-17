import HOME_ROUTE from './Home/route';
import home from './Home';
import GitHubApiLayout from './GitHubApiLayout';

export default {
  path: '/',
  component: GitHubApiLayout,
  indexRoute: { onEnter: (nextState, replace) => replace(`/${HOME_ROUTE.route}`) },
  childRoutes: [
    home,
  ],
};
