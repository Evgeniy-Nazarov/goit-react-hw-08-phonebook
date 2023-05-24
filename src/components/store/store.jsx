import PropTypes from 'prop-types';
import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from 'components/features/contactsSlice';
import { filteredReducer } from 'components/features/filteredSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filteredReducer,
  },
});

store.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string.isRequired,
};
