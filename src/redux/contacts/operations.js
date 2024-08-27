import { createAsyncThunk } from '@reduxjs/toolkit';
import { goitApi } from '../../API';

export const fetchContactsThunk = createAsyncThunk(
    'contacts/fetchContacts',
    async (_, thunkAPI) => {
        try {
            const { data } = await goitApi.get('contacts');
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const addContactsThunk = createAsyncThunk(
    'contacts/addContacts',
    async (card, thunkAPI) => {
        try {
            const { data } = await goitApi.post('contacts', card);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteContactsThunk = createAsyncThunk(
    'contacts/deleteContacts',
    async (id, thunkAPI) => {
        try {
            await goitApi.delete(`contacts/${id}`);
            return id;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);