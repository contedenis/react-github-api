import { get } from 'lodash';

export const selectRepositoriesByLanguage = ({ repositoriesByLanguage }) => get(repositoriesByLanguage, 'repositoriesByLanguage');
export const selectFetching = ({ repositoriesByLanguage }) => get(repositoriesByLanguage, 'fetching');
