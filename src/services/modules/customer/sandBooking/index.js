import { bookingServiceAPI } from "../../../bookingServiceAPI";

import {
  sandBook,
  fetchSandBooking,
  updateSandRegistration,
  updateZoneOperator,
  FetchSandPass,
  fetchZonePCSandBooking,
  fetchPCSandBooking,
  fetchCustomerSandBooking,
  fetchPCSandBookingHistory,
  fetchSandBookingHistory,
} from "./sandBooking";

export const sandApi = bookingServiceAPI.injectEndpoints({
  endpoints: (build) => ({
    sandBook: sandBook(build),
    fetchSandBooking: fetchSandBooking(build),
    updateSandRegistration: updateSandRegistration(build),
    updateZoneOperator: updateZoneOperator(build),
    FetchSandPass: FetchSandPass(build),
    fetchZonePCSandBooking: fetchZonePCSandBooking(build),
    fetchPCSandBooking: fetchPCSandBooking(build),
    fetchPCSandBookingHistory: fetchPCSandBookingHistory(build),
    fetchCustomerSandBooking: fetchCustomerSandBooking(build),
    fetchSandBookingHistory: fetchSandBookingHistory(build),
  }),
  overrideExisting: false,
});

export const {
  useSandBookMutation,
  useLazyFetchSandBookingQuery,
  useUpdateZoneOperatorMutation,
  useUpdateSandRegistrationMutation,
  useLazyFetchSandPassQuery,
  useLazyFetchZonePCSandBookingQuery,
  useLazyFetchPCSandBookingQuery,
  useLazyFetchPCSandBookingHistoryQuery,
  useLazyFetchCustomerSandBookingQuery,
  useLazyFetchSandBookingHistoryQuery,
} = sandApi;
