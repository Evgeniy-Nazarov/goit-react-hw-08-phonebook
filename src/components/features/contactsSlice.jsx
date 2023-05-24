import PropTypes from 'prop-types';
import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './thunk';

const pendingContacts = state => {
  state.isLoading = true;
};

const rejectedContacts = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const fulfilledContacts = state => {
  state.isLoading = false;
  state.error = null;
};

const actions = [fetchContacts, addContact, deleteContact];
const getActions = type => isAnyOf(...actions.map(action => action[type]));

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts = action.payload;
        state.isLoading = false;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.contacts.findIndex(
          stat => stat.id === action.payload.id
        );
        state.contacts.splice(index, 1);
      })
      .addMatcher(getActions('pending'), pendingContacts)
      .addMatcher(getActions('rejected'), rejectedContacts)
      .addMatcher(getActions('fulfilled'), fulfilledContacts);
  },
});

export const contactsReducer = contactsSlice.reducer;

contactsSlice.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};
