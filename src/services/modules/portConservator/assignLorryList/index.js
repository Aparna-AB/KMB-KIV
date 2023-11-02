import { fetchAssignLorry } from "./lorryList";

import { bookingServiceAPI } from "../../../bookingServiceAPI";

export const AssignLorryApi = bookingServiceAPI.injectEndpoints({
  endpoints: (build) => ({
    fetchAssignLorry: fetchAssignLorry(build),
  }),
  overrideExisting: false,
});

export const { useLazyFetchAssignLorryQuery } = AssignLorryApi;
