import { takeLatest, all } from 'redux-saga/effects';

// list types
import { ListUsersTypes } from './containers/ListUsers/constants';
// old coding style, need to be refactor as ListUsersTypes
import { LOAD_REPOS } from './containers/App/constants';

// saga function
import { getRepos } from './containers/HomePage/saga';
import { getListUsers } from './containers/ListUsers/saga';

export default function* root() {
  yield all([
    // Home page
    takeLatest(LOAD_REPOS, getRepos),

    // get list users
    takeLatest(ListUsersTypes.LIST_USERS, getListUsers),
  ])
}