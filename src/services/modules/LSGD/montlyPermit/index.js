import { masterServiceAPI } from "../../../masterServiceAPI";
import {
  addPermit,
  fetchPermit,
  updateMonthlyPermit,
  fetchLSGDPermit,
} from "./monthlypermit";

export const monthlyPermitApi = masterServiceAPI.injectEndpoints({
  endpoints: (build) => ({
    addPermit: addPermit(build),
    fetchPermit: fetchPermit(build),
    updateMonthlyPermit: updateMonthlyPermit(build),
    fetchLSGDPermit: fetchLSGDPermit(build),
  }),
  overrideExisting: false,
});

export const {
  useAddPermitMutation,
  useLazyFetchPermitQuery,
  useUpdateMonthlyPermitMutation,
  useLazyFetchLSGDPermitQuery,
} = monthlyPermitApi;
