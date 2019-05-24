import { takeLatest, all } from 'redux-saga/effects';

// list types
import { ContactListTypes } from './containers/ContactList/constants';
// old coding style, need to be refactor as ContactListTypes
import { LOAD_REPOS } from './containers/App/constants';

// saga function
import { getRepos } from './containers/HomePage/saga';
import { contactListSearch } from './containers/ContactList/saga';

export default function* root() {
  yield all([
    // Home page
    takeLatest(LOAD_REPOS, getRepos),

    // get list users
    takeLatest(ContactListTypes.CONTACTS_SEARCH, contactListSearch),
  ])
}