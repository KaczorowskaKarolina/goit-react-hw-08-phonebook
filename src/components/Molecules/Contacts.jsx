import React from 'react';
import ContactList from '../Organisms/List';
import AddContactForm from '../Organisms/Form';

const Contacts = () => {
  const contacts = [];

  return (
    <div>
      <h1>Contacts</h1>
      {/* Wyświetl zapisane kontakty */}
      <ContactList contacts={contacts} />
      {/* Dodaj formularz do dodawania nowych kontaktów */}
      <AddContactForm />
    </div>
  );
};

export default Contacts;
