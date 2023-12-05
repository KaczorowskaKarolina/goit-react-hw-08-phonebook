import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, addContact, deleteContact, setFilter } from '../Atoms/Store';
import Form from '../Organisms/Form';
import Filter from '../Molecules/Filter';
import UserMenu from '../Organisms/UserMenu';
import List from '../Organisms/List';
import { nanoid } from 'nanoid';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';

import { RegisterComponent } from '../Pages/Register';

import css from './app.css';

const AppContainer = () => {
  const contacts = useSelector(state => state.contacts.data);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const addContactOnSubmit = async ({ name, number }) => {
    const contactOnList = contacts.some((contact) => contact.name.toLowerCase() === name.toLowerCase());

    if (contactOnList) {
      alert('This contact is already on Your list');
    } else {
      try {
        await dispatch(addContact({ id: nanoid(), name, number }));
        await dispatch(fetchContacts());
        navigate('/some-path');
      } catch (error) {
        console.error('Error adding contact:', error.message);
      }
    }
  };

  const deleteContactHandler = async (contactId) => {
    try {
      await dispatch(deleteContact(contactId));
      await dispatch(fetchContacts());
    } catch (error) {
      console.error('Error deleting contact:', error.message);
    }
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
      <h1>Phonebook</h1>
      <Link to="/register">Register</Link>
      <Routes>
        <Route path="/register" element={<RegisterComponent />} />
        <Route path="/" element={<>
          <Form onSubmit={addContactOnSubmit} />
          <h2>Contacts</h2>
          <Filter value={filter} onChange={onFilterChange} />
          <List contacts={showFilteredContact()} onDelete={deleteContactHandler} />
          <UserMenu />
        </>} />
      </Routes>
    </div>
  );
};

export default AppContainer;