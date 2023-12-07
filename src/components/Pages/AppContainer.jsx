import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, addContact, deleteContact, setFilter } from '../Atoms/Store';

import Form from '../Organisms/Form';
import Filter from '../Molecules/Filter';
import List from '../Organisms/List';
import Header from '../Organisms/Header';

import { nanoid } from 'nanoid';

import css from './app.css';

const AppContainer = () => {
  const contacts = useSelector((state) => state.contacts.data);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    // Dodaj efekt do śledzenia zmian w kontakcie i ponownego pobierania
    // kontaktów z serwera po dodaniu nowego kontaktu
    if (contacts.length > 0) {
      dispatch(fetchContacts());
    }
  }, [contacts, dispatch]);

  const addContactOnSubmit = ({ name, number }) => {
    try {
      // Dispatch the addContact action
      dispatch(addContact({ id: nanoid(), name, number }));
    } catch (error) {
      // Handle the error if the contact already exists
      alert(error.message);
    }
  };

  const deleteContactHandler = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  const onFilterChange = (event) => {
    event.preventDefault();
    dispatch(setFilter(event.target.value.toLowerCase()));
  };

  const showFilteredContact = () => {
    return contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(filter);
    });
  };

  return (
    <div className={css.container}>
      <Header />
      <h1>Phonebook</h1>
      <Form onSubmit={addContactOnSubmit} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={onFilterChange} />
      {/* Pass the contacts to the List component */}
      <List contacts={showFilteredContact()} onDelete={deleteContactHandler} />
    </div>
  );
};

export default AppContainer;
