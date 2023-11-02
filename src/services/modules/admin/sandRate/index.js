import { masterServiceAPI } from "../../../masterServiceAPI";
import {
  addSandRate,
  fetchSandRate,
  updateSandRate,
  fetchAllSandRate,
} from "./sandRate";

export const SandRateApi = masterServiceAPI.injectEndpoints({
  endpoints: (build) => ({
    addSandRate: addSandRate(build),
    fetchSandRate: fetchSandRate(build),
    updateSandRate: updateSandRate(build),
    fetchAllSandRate: fetchAllSandRate(build),
  }),
  overrideExisting: false,
});

export const {
  useAddSandRateMutation,
  useLazyFetchSandRateQuery,
  useUpdateSandRateMutation,
  useLazyFetchAllSandRateQuery,
} = SandRateApi;
