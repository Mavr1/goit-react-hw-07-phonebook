import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import Section from './components/section/Section';
import AddContactform from './components/addContactform/AddContactform';
import Filter from './components/filter/Filter';
import Contacts from './components/contacts/Contacts';
import Switches from './components/switch/Switch';
import { filterContacts } from './services/helpers';
import { getAllContacts } from './redux/contacts/contactsOperations';
import styles from './App.module.css';
import contactsSelectors from './redux/contacts/contactsSelectors';
import themeSelectors from './redux/theme/themeSelectors';

const App = ({ contacts, filter, currentTheme }) => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getAllContacts()), [dispatch]);

  return (
    <div
      className={currentTheme === 'light' ? styles.AppLight : styles.AppDark}
    >
      <Switches />
      <h1>Phonebook</h1>
      <Section>
        <AddContactform />
      </Section>
      <Section name="Contacts">
        {contacts.length > 1 && <Filter />}
        <Contacts
          contacts={filter !== '' ? filterContacts(contacts, filter) : contacts}
        />
      </Section>
    </div>
  );
};

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getContactsList(state),
  filter: contactsSelectors.getContactsFilter(state),
  currentTheme: themeSelectors.getCurrentTheme(state),
});

export default connect(mapStateToProps)(App);
