import React from 'react';
import Input from '../input/Input';
import { useDispatch } from 'react-redux';
import contactsActions from '../../redux/contacts/contactsActions';

const Filter = () => {
  const dispatch = useDispatch();
  const filterContacts = (query) => dispatch(contactsActions.setFilter(query));
  return (
    <Input
      label="Find contacts by name"
      onChange={filterContacts}
      name="filter"
    />
  );
};

export default Filter;
