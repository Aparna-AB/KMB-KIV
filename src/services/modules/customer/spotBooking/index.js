import { bookingServiceAPI } from "../../../bookingServiceAPI";
import {
  spotBook,
  fetchSpotBooking,
  pcApproval,
  zoApproval,
  zoApprovalPayment,
  FetchSandPass,
  fetchSpotBookingZo,
  fetchSpotBookingByToken,
  fetchPorton,
} from "./spotBooking";
export const bankApi = bookingServiceAPI.injectEndpoints({
  endpoints: (build) => ({
    spotBook: spotBook(build),
    fetchSpotBooking: fetchSpotBooking(build),
    pcApproval: pcApproval(build),
    zoApproval: zoApproval(build),
    zoApprovalPayment: zoApprovalPayment(build),
    FetchSandPass: FetchSandPass(build),
    fetchSpotBookingZo: fetchSpotBookingZo(build),
    fetchSpotBookingByToken: fetchSpotBookingByToken(build),
  }),
  overrideExisting: false,
});

export const {
  useSpotBookMutation,
  useLazyFetchSpotBookingQuery,
  usePcApprovalMutation,
  useZoApprovalMutation,
  useLazyZoApprovalPaymentQuery,
  useLazyFetchSandPassQuery,
  useLazyFetchSpotBookingZoQuery,
  useLazyFetchSpotBookingByTokenQuery,
} = bankApi;
