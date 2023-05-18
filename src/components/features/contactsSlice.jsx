import PropTypes from 'prop-types';
import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contacts = initialState;

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contacts,
  reducers: {
    addContact: (state, action) => {
      state.push(action.payload);
    },
    prepareContact: (name, number) => {
      return {
        payload: {
          id: nanoid(),
          name,
          number,
        },
      };
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, prepareContact, deleteContact } =
  contactsSlice.actions;
export const getContacts = state => state.contacts;
export const contactsReducer = contactsSlice.reducer;

contactsSlice.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
