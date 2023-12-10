import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContactAsync } from 'redux/actions';

const AddContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    // Sprawdź, czy name i number nie są puste
    if (!name.trim() || !number.trim()) {
      alert('Name and number are required fields.');
      return;
    }

    // Wywołaj akcję dodawania kontaktu
    dispatch(addContactAsync({ name, number }));

    // Zresetuj formularz
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <input
          className="phonebook-input"
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={handleChange}
        />
        <input
          className="phonebook-input"
          type="tel"
          name="number"
          placeholder="Phone Number"
          value={number}
          onChange={handleChange}
        />
        <button className="phonebook-btn" type="submit">
          Add contact
        </button>
      </div>
    </form>
  );
};

export default AddContactForm;
