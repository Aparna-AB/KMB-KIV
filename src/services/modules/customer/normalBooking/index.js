import { bookingServiceAPI } from "../../../bookingServiceAPI";
import { normalBook, fetchSpotBooking } from "./normalBooking";

export const normalBookApi = bookingServiceAPI.injectEndpoints({
  endpoints: (build) => ({
    normalBook: normalBook(build),
    fetchSpotBooking: fetchSpotBooking(build),
  }),
  overrideExisting: false,
});

export const { useNormalBookMutation, useLazyFetchSpotBookingQuery } =
  normalBookApi;
