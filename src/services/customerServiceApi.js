import { Config } from "../config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { store } from "../store";
import { showError } from "./loadingSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: Config.CUSTOMER_SERVICE_API,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().authSlice.userToken;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});
const baseQueryWithInterceptor = async (
  args,
  customerServiceAPI,
  extraOptions
) => {
  const result = await baseQuery(args, customerServiceAPI, extraOptions);
  if (result.error?.status === 401) {
    // here you can deal with 401 error
  }
  console.log("aaaaaaaaaaaaaaaaaa", result);
  if (
    result?.data?.success === false ||
    result?.error?.data?.success === false
  ) {
    store.dispatch(showError(result));
  }
  return result;
};

const customerServiceAPI = createApi({
  baseQuery: baseQueryWithInterceptor,
  reducerPath: "customerServiceAPI",
  endpoints: () => ({}),
});
export { customerServiceAPI };
