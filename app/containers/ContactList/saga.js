import { call, put } from 'redux-saga/effects';
import { contactListLoaded } from './actions';

import request from 'utils/request';

/**
 * Github repos request/response handler
 */
export function* contactListSearch({ term = ''}) {
  const requestURL = `/contact/search?term=${term}`;
  try {
    // our request helper (see 'utils/request')
    const { code, data: contactList = [] } = yield call(request, requestURL);

    // update UI once search success
    if (code === 0) {
      yield put(contactListLoaded(contactList));
    }
  } catch (err) {
    // yield put(repoLoadingError(err));
  }
}
