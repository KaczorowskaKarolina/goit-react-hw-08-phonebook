import axios from 'axios';

const BASE_URL = 'https://655bc2e8ab37729791a98fce.mockapi.io';

export const fetchContacts = async () => {
  const response = await axios.get(`${BASE_URL}/contacts`);
  return response.data;
};

export const addContact = async contact => {
  const response = await axios.post(`${BASE_URL}/contacts`, contact);
  return response.data;
};

export const deleteContact = async contactId => {
  await axios.delete(`${BASE_URL}/contacts/${contactId}`);
};