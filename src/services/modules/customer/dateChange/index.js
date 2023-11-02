import { bookingServiceAPI } from "../../../bookingServiceAPI";
import {
  requestToChangeDate,
  fetchDateChangeRequest,
  updateDateRequest,
} from "./dateChange";

export const bankApi = bookingServiceAPI.injectEndpoints({
  endpoints: (build) => ({
    requestToChangeDate: requestToChangeDate(build),
    fetchDateChangeRequest: fetchDateChangeRequest(build),
    updateDateRequest: updateDateRequest(build),
  }),
  overrideExisting: false,
});

export const {
  useRequestToChangeDateMutation,
  useLazyFetchDateChangeRequestQuery,
  useUpdateDateRequestMutation,
} = bankApi;
