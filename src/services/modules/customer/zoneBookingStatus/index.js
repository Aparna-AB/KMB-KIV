import { bookingServiceAPI } from "../../../bookingServiceAPI";
import { fetchZoneBookingStatus } from "./zonebookingstatus";

export const zonebookingstatusApi = bookingServiceAPI.injectEndpoints({
  endpoints: (build) => ({
    fetchZoneBookingStatus: fetchZoneBookingStatus(build),
  }),
  overrideExisting: false,
});

export const { useLazyFetchZoneBookingStatusQuery } = zonebookingstatusApi;
