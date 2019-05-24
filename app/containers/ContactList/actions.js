/*
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import { ContactListTypes } from './constants';

export function contactList(term) {
  return {
    type: ContactListTypes.CONTACTS_SEARCH,
    term
  };
}

/**
 * Dispatched when the list users loaded
 *
 * @param  {array} contactList The list users data
 *
 * @return {object} An action object with a type of LOAD_CONTACTS_SUCCESS
 */
export function contactListLoaded(contactList) {
  return {
    type: ContactListTypes.LOAD_USERS_SUCCESS,
    contactList
  };
}
