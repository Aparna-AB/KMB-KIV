import { useSelctors } from "react-redux";
import { store } from "../store";

export function getUserInfo() {
  const state = store.getState();
  return state.authSlice.userInfo;
}

export function getToken() {
  const state = store.getState();
  return state.authSlice.userToken;
}
