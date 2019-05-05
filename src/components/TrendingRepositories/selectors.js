import { get } from 'lodash';

export const selectTrendingRepositories = ({ trendingRepositories }) => get(trendingRepositories, 'repositories');
