import { get } from 'lodash';

export const selectUsersList = ({ usersList }) => get(usersList, 'usersList');
export const selectUserDetails = ({ usersList }) => get(usersList, 'userDetails');
export const selectFetchingList = ({ usersList }) => get(usersList, 'fetchingList');
