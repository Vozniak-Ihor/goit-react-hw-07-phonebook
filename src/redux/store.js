import { configureStore } from '@reduxjs/toolkit';
import { contactSlice } from './contactSlice/contactSlice';
import { filterSlice } from './filterSlice/filterSlice';
export const store = configureStore({
  reducer: {
    contacts: contactSlice.reducer,
    filter: filterSlice.reducer,
  },
});

export default store;
