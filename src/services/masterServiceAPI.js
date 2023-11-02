import { Config } from "../config";
import React from "react";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { showError } from "./loadingSlice";
import { store } from "../store";

const baseQuery = fetchBaseQuery({
  baseUrl: Config.CUSTOMER_MASTER_API,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().authSlice.userToken;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});
const baseQueryWithInterceptor = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  if (result.error?.status === 401) {
    // here you can deal with 401 error
  }

  if (result?.data?.success === false) {
    store.dispatch(showError(result));
  }
  return result;
};

const masterServiceAPI = createApi({
  baseQuery: baseQueryWithInterceptor,
  reducerPath: "masterServiceApi",
  endpoints: () => ({}),
});
export { masterServiceAPI };
