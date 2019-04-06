import SEARCH_BY_LANGUAGE from './route';

export default {
  path: SEARCH_BY_LANGUAGE.route,
  getComponent(nextState, cb) {
    import('./SearchByLanguageLayout')
      .then(layout => cb(null, layout.default));
  },
};
