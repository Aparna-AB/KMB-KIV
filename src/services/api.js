import { Config } from "../config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseQuery = fetchBaseQuery({
  baseUrl: Config.API_URL,
  prepareHeaders: (headers, { getState }) => {
    // const token = getState().auth.token
    const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgxNTI4MTE0LCJqdGkiOiIxM2VhMzlmYWIyZWM0NzMzOThlZWQ1N2JiMzE1OWZhZCIsInVzZXJfaWQiOjY2fQ.eYXUdNbs2vjU8SlwPvRrSmYDPyiJqctkMHQJs0jIrAQ";
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
  return result;
};

const api = createApi({
  baseQuery: baseQueryWithInterceptor,
  reducerPath: "api",
  endpoints: () => ({}),
});
export { api };
