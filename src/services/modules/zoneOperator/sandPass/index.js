import { bookingServiceAPI } from "../../../bookingServiceAPI";
import { fetchSandPass } from "./sandPass";

export const sandPassApi = bookingServiceAPI.injectEndpoints({
  endpoints: (build) => ({
    fetchSandPass: fetchSandPass(build),
  }),
  overrideExisting: false,
});

export const { useLazyFetchSandPassQuery } = sandPassApi;
