import { createSlice } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
const initialState = {
  error: false,
  showError: false,
  message: "",
  loading: false,
};

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    showError(state, { payload }) {
      state.error = true;
      state.message = payload?.data?.message || payload?.error?.data?.message;
      state.showError = true;
    },
    hideError(state) {
      state.error = false;
      state.message = "";
      state.showError = false;
    },
  },
});

export const { showError, hideError } = loadingSlice.actions;
export default loadingSlice.reducer;
