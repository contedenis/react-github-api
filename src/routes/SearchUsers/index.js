import SEARCH_USERS from './route';

export default {
  path: SEARCH_USERS.route,
  getComponent(nextState, cb) {
    import('./SearchUsersLayout')
      .then(layout => cb(null, layout.default));
  },
};
