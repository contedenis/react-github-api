import { get } from 'lodash';

export const selectTrendingRepositories = ({ trendingRepositories }) => get(trendingRepositories, 'repositories');
export const selectFetching = ({ trendingRepositories }) => get(trendingRepositories, 'fetching');
