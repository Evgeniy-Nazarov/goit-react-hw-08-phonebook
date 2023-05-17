import { createSlice } from "@reduxjs/toolkit";






export const filteredSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        changeFilter(state, action) {
            return (state = action.payload);
        }
    }
});

export const { changeFilter } = filteredSlice.actions;

export const filteredReducer = filteredSlice.reducer;


export const getFilter = state => state.filter;