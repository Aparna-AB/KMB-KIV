import { masterServiceAPI } from "../../../masterServiceAPI";
import { addCanoe, fetchCanoe, updateCanoe, fetchAllCanoe } from "./canoe";

export const CanoeApi = masterServiceAPI.injectEndpoints({
  endpoints: (build) => ({
    addCanoe: addCanoe(build),
    fetchCanoe: fetchCanoe(build),
    updateCanoe: updateCanoe(build),
    fetchAllCanoe: fetchAllCanoe(build),
  }),
  overrideExisting: false,
});

export const {
  useAddCanoeMutation,
  useLazyFetchCanoeQuery,
  useUpdateCanoeMutation,
  useLazyFetchAllCanoeQuery,
} = CanoeApi;
