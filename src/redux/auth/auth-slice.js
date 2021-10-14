import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null, password: null},
  token: null,
    isLoggedIn: false,
    error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logOut.fulfilled](state, action) {
      state.user = { name: null, email: null, password: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      },
    //   [authOperations.register.rejected](state, action) {
    //       state.user.error = action.payload;
    //   },
    //   [authOperations.logIn.rejected](state, action) {
    //       state.user.error = action.payload;
    //   },
    //   [authOperations.logOut.rejected](state, action) {
    //       state.user.error = action.payload;
    //   },
    //   [authOperations.fetchCurrentUser.rejected](state, action) {
    //       state.user.error = action.payload;
    //   },
  },
});

export default authSlice.reducer;