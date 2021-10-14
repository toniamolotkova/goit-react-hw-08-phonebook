import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('auth/register', async (credentials, { rejectWithValue}) => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
      if (error.response.status === 400) {
          toast.error('This user is already exist') 
      }
      if (error.response.status === 500) {
          toast.error('Something went wrong. Try another time')
      }
     throw rejectWithValue(error.message);
      
  }
});


const logIn = createAsyncThunk('auth/login', async (credentials, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {


     if (error.response.status === 400) {
                toast.error('Incorrect password or login')
      }
      throw rejectWithValue(error.message);
  
  }
});


const logOut = createAsyncThunk('auth/logout', async (_, { rejectWithValue}) => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
      throw rejectWithValue(error.message);
  }
});

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
        throw thunkAPI.rejectWithValue(error.message);
    }
  },
);

const authOperations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};

export default authOperations;