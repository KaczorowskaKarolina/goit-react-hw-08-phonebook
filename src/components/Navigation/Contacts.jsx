import React from 'react';
import ContactList from '../ContactList/ContactList';
import AddContactForm from '../ContactForm/ContactForm';


const Contacts = () => {
  // Pobierz kontakty z Redux lub innego miejsca w zależności od potrzeb
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
