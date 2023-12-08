import React from 'react';
// import { useDispatch } from 'react-redux';
// import { deleteContact } from '../Atoms/Store';
import PropTypes from 'prop-types';

import './list.css';

const List = ({ contacts, filter, onDeleteContact }) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container">
      <ul className="contacts-list">
        {filteredContacts.map(contact => (
          <li className="contacts-item" key={contact.id}>
            {contact.name}: {contact.number}
            <button
              className="delete-btn"
              onClick={() => onDeleteContact(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

List.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  filter: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default List;