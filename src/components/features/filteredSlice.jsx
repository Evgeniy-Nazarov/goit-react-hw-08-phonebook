import PropTypes from 'prop-types';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

export const filteredSlice = createSlice({
  name: 'filter',
  initialState: initialState.filter,
  reducers: {
    changeFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const { changeFilter } = filteredSlice.actions;

export const filteredReducer = filteredSlice.reducer;

export const getFilter = state => state.filter;

filteredSlice.propTypes = {
  filter: PropTypes.string,
  changeFilter: PropTypes.func,
  filteredReducer: PropTypes.func,
  getFilter: PropTypes.func,
};
