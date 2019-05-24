/*
 * contactListReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';

import { ContactListTypes } from './constants';

// The initial state
export const initialState = {
  contactList: []
};

/* eslint-disable default-case, no-param-reassign */
const contactListReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ContactListTypes.CONTACTS_SEARCH:
        draft.loading = true;
        break;
      case ContactListTypes.LOAD_CONTACTS_SUCCESS:
        draft.loading = false;
        draft.contactList = action.contactList;
        break;
    }
  });

export default contactListReducer;
