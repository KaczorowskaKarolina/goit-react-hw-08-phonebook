import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../Atoms/Store';
import PropTypes from 'prop-types';

import './list.css';

const List = ({ contacts, onDelete }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Możesz umieścić tutaj kod, który ma być wykonany po zmianie contacts
  }, [contacts]);

  const deleteContactHandler = async (contactId) => {
    try {
      await dispatch(deleteContact(contactId));
      onDelete(contactId); // Wywołanie funkcji przekazanej przez propa
    } catch (error) {
      console.error('Error deleting contact:', error.message);
    }
  };

  return (
    <ul>
      {contacts.map((contact) => (
        <li className="contact" key={contact.id}>
          {contact.name}: {contact.number}
          <button className="delButton" onClick={() => deleteContactHandler(contact.id)}>
            Delete contact
          </button>
        </li>
      ))}
    </ul>
  );
};

List.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func.isRequired,
};

export default List;
