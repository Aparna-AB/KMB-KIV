import { Config } from "../config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { store } from "../store";
import { showError } from "./loadingSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: Config.CUSTOMER_BOOKING_SERVICE_API,
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
  if (
    result?.data?.success === false ||
    result?.error?.data?.success === false
  ) {
    store.dispatch(showError(result));
  }

  return result;
};

const bookingServiceAPI = createApi({
  baseQuery: baseQueryWithInterceptor,
  reducerPath: "bookingServiceApi",
  endpoints: () => ({}),
});
export { bookingServiceAPI };
