import TRENDING_REPOSITORIES from './route';

export default {
  path: TRENDING_REPOSITORIES.route,
  getComponent(nextState, cb) {
    import('./TrendingRepositoriesLayout')
      .then(layout => cb(null, layout.default));
  },
};
