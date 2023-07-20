import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
axios.defaults.baseURL = 'https://64b03a19c60b8f941af56ea1.mockapi.io/contacts';
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
     console.log('fdfsfsdf');
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contact, { rejectWithValue }) => {
       
        try {
            const response = await axios.post('/contacts', contact);
              Notify.success('Сontact added', { fontSize: '15px', width: '200px' });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      Notify.failure('Contact deleted', {
        fontSize: '15px',
        width: '200px',
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);