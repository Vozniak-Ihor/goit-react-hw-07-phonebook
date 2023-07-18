import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from '../operations';

const initialState = {
  items: [],
  isLoaidng: false,
  error: null,
};

const handlePending = state => (state.isLoaidng = true);

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const handleFulfilledGet = (state, { payload }) => {
  state.items = payload;
  handleFulfilled(state);
};
const handleFulfilledAdd = (state, action) => {
  console.log(action);
  state.items.push(action.payload);
  handleFulfilled(state);
};

const handleFulfilledDelete = (state, { payload }) => {
  state.items.filter(({ id }) => id !== payload.id);
  handleFulfilled(state);
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFulfilledGet)
      .addCase(addContact.fulfilled, handleFulfilledAdd)
      .addCase(deleteContact.fulfilled, handleFulfilledDelete)
      .addMatcher(isAnyOf( fetchContacts.pending, addContact.pending, deleteContact.pending),handlePending)
      .addMatcher(isAnyOf(fetchContacts.rejected, addContact.rejected, deleteContact.rejected),handleRejected);},
});


