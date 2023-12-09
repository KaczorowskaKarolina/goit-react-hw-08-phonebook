import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContactAsync } from '../Atoms/Action';

import './form.css';

const Form = () => {
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

    if (!name.trim() || !number.trim()) {
      alert('Name and number are required fields.');
      return;
    }

    dispatch(addContactAsync({ name, number }));

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

export default Form;