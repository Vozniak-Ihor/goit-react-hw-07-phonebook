import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  contacts: [],
};
export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContacts: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },
    deleteContacts: (state, { payload }) => {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
  },
});

export const { addContacts, deleteContacts } = contactSlice.actions;

export default contactSlice.reducer;
