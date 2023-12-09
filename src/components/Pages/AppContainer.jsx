import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, addContact, deleteContact, setFilter } from '../Atoms/Store';

import Form from '../Organisms/Form';
import Filter from '../Molecules/Filter';
import List from '../Organisms/List';
import Navigation from '../Organisms/Navigation';

import { nanoid } from 'nanoid';

import css from './app.css';

const AppContainer = () => {
  const contacts = useSelector((state) => state.contacts.data);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ name: '', number: '' });

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const addContactOnSubmit = async ({ name, number }) => {
    try {
      await dispatch(addContact({ id: nanoid(), name, number }));
      setFormData({ name: '', number: '' }); // Reset form data after successful addition
    } catch (error) {
      alert(error.message);
    }
  };

  const deleteContactHandler = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  const onFilterChange = (value) => {
  dispatch(setFilter(value.toLowerCase()));
};

  return (
  <div className={css.container}>
    <Navigation />
    <h1>Phonebook</h1>
    <Form
      name={formData.name}
      number={formData.number}
      onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
      onSubmit={(e) => {
        e.preventDefault();
        addContactOnSubmit(formData);
      }}
    />
    <h2>Contacts</h2>
    <Filter value={filter || ''} onChange={onFilterChange} />
    <List contacts={contacts} filter={filter} onDeleteContact={deleteContactHandler} />
  </div>
);
};

export default AppContainer;
