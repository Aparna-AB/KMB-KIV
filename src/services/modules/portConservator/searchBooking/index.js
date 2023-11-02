import { bookingServiceAPI } from "../../../bookingServiceAPI";
import { fetchSearchBooking } from "./searchBooking";

export const searchApi = bookingServiceAPI.injectEndpoints({
  endpoints: (build) => ({
    fetchSearchBooking: fetchSearchBooking(build),
  }),
  overrideExisting: false,
});

export const { useLazyFetchSearchBookingQuery } = searchApi;
