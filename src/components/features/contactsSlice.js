import { createSlice, nanoid } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


import contactsPhonebook from '../data/contactsPhonebook.json';

const initialState = {
  contacts: contactsPhonebook,
};
    

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact: (state, action) => {
            state.contacts.unshift(action.payload);
        },
        prepareContact: ({ name, number }) => {
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        number,
                    },
                };
            },
            deleteContact(state, action) {
      const index = state.contacts.findIndex(
        stat => stat.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'],
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

        
    
export const { addContact, deleteContact } = contactsSlice.actions;
export const getContacts = state => state.contacts.contscts;