import { bookingServiceAPI } from "../../../bookingServiceAPI";
import { fetchLorryDetails } from "./lorryDetails";

export const lorryApi = bookingServiceAPI.injectEndpoints({
  endpoints: (build) => ({
    fetchLorryDetails: fetchLorryDetails(build),
  }),
  overrideExisting: false,
});

export const { useLazyFetchLorryDetailsQuery } = lorryApi;
