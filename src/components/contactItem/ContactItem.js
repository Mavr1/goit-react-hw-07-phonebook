import React from 'react';
import Button from '../button/Button';
import { connect } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contactsOperations';
import contactsSelectors from '../../redux/contacts/contactsSelectors';

const ContactItem = ({ name, number, deleteContact }) => (
  <li>
    <span className="contactName">{name}</span>
    <span className="contactNumber">{number}</span>
    <Button name="Delete" clsn="btnDelete" onClick={deleteContact} />
  </li>
);

const mapStateToProps = (state, { id }) => {
  return { ...contactsSelectors.getContactData(state, id) };
};

const mapDispatchToProps = (dispatch, { id }) => ({
  deleteContact: () => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);
