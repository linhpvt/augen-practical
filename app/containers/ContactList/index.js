/*
 * Contact List Page
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo, useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { createSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import contactListReducer from './reducer';
import { contactList } from './actions';
import sagas from 'sagas';
import CustomTable from 'components/Table/Table';
import { isEmpty } from 'lodash';

import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import TextField from '@material-ui/core/TextField';
import Search from "@material-ui/icons/Search";
import Button from "components/CustomButtons/Button.jsx";

const key = 'contactList';

export const ContactListContext = React.createContext("");

export function ContactList({
  contactList = [],
  onLoadContactList
}) {
  useInjectReducer({ key, reducer: contactListReducer });
  useInjectSaga({ key, saga: sagas });
  useEffect(() => {
    // load contact list at first loading page
    if (isEmpty(contactList)) onLoadContactList();
  }, []);

  const [name, changeName] = useState('');
  return (
    <article>
      <Helmet>
        <title>Contact list</title>
        <meta
          name="contact list"
          content="Show contact list"
        />
      </Helmet>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <TextField
            label="Search..."
            value={name}
            onChange={(e) => { changeName(e.target.value) }}
            margin="normal"
          />
          <Button color="white" aria-label="edit"
            justIcon round style={{marginTop: '30px'}}
            onClick={() => { onLoadContactList(name) }}
          >
            <Search />
          </Button>
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4>Contact List From CSV File</h4>
            </CardHeader>
            <CardBody>
              <CustomTable
                tableHeaderColor="primary"
                tableHead = {['First Name', 'Last Name', 'Phone', 'Email']}
                tableData = {contactList}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </article>
  );
}

ContactList.propTypes = {
  contactList: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onLoadContactList: PropTypes.func
};

import { initialState } from './reducer';
const selectGlobal = state => state.contactList || initialState;
const makeSelectRepos = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.contactList,
  );

const mapStateToProps = createStructuredSelector({
  contactList: makeSelectRepos(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onLoadContactList: (term) => { dispatch(contactList(term)); },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(ContactList);
