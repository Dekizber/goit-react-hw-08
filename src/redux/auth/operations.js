import { createAsyncThunk } from '@reduxjs/toolkit';
import { goitApi } from '../../API';



const setAuthHeader = token => {
    goitApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
    goitApi.defaults.headers.common.Authorization = ``;
};

export const registerThunk = createAsyncThunk('register', async (credentials, thunkAPI) => {
    try {
        const { data } = await goitApi.post('/users/signup', credentials);
        setAuthHeader(data.token);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const loginThunk = createAsyncThunk('login', async (credentials, thunkAPI) => {
    try {
        const { data } = await goitApi.post('/users/login', credentials);
        setAuthHeader(data.token);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const logoutThunk = createAsyncThunk('logout', async (_, thunkAPI) => {
    try {
        await goitApi.post('/users/logout');
        clearAuthHeader();
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const refreshUserThunk = createAsyncThunk('refresh', async (_, thunkAPI) => {
    const savedToken = thunkAPI.getState().auth.token;
    if (savedToken === null) {
        return thunkAPI.rejectWithValue('token is not exist!');
    }
    try {
        console.log(savedToken);

        setAuthHeader(savedToken);
        const { data } = await goitApi.get('users/current');
        return data;
    } catch (error) {
        console.log(error.message);
        return thunkAPI.rejectWithValue(error.message);


    }
});