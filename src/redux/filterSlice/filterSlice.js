import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  filter: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    contactfilter: (state, { payload }) => {
      state.filter = payload;
    },
    deletefilter: state => {
      state.filter = '';
    },
  },
});

export const { contactfilter, deletefilter } = filterSlice.actions;

export default filterSlice.reducer;
