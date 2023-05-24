import PropTypes from 'prop-types';
import { createSlice } from '@reduxjs/toolkit';

export const filteredSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const { changeFilter } = filteredSlice.actions;

export const filteredReducer = filteredSlice.reducer;

filteredSlice.propTypes = {
  filter: PropTypes.string,
  changeFilter: PropTypes.func,
  filteredReducer: PropTypes.func,
  getFilter: PropTypes.func,
};
