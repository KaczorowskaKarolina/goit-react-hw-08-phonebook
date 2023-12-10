import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContactsAsync } from '../Atoms/Action';

export const Contacts = () => {
 const dispatch = useDispatch();
 const contacts = useSelector((state) => state.contacts.contacts);
 const status = useSelector((state) => state.contacts.status);
 const error = useSelector((state) => state.contacts.error);

 useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchContactsAsync());
    }
 }, [status, dispatch]);

 const renderContacts = () => {
    if (status === 'loading') return <div>Loading...</div>;
    if (status === 'succeeded')
      return contacts.map((contact) => <div key={contact.id}>{contact.name}</div>);
    if (status === 'failed') return <div>{error}</div>;
 };

 return (
    <div>
      <h2>Contacts</h2>
      {renderContacts()}
    </div>
 );
};