import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  userInfo: null, // for user object
  userToken: null, // for storing the JWT
  error: null,
  success: false, // for monitoring the registration process.
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginAction: (state, { payload }) => {
      state.userInfo = payload?.data;
      state.userToken = payload?.data?.access_token;
    },
    logoutAction: (state) => {
      state.userInfo = null;
      state.userToken = null;
    },
  },
  extraReducers: {},
});

export const { loginAction, logoutAction } = authSlice.actions;

export default authSlice.reducer;
