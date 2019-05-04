import { get } from 'lodash';

export const selectReact = ({ home }) => get(home, 'repositories.react');
export const selectRedux = ({ home }) => get(home, 'repositories.redux');
export const selectReduxSaga = ({ home }) => get(home, 'repositories.redux-saga');
