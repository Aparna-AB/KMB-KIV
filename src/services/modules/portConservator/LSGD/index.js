import { masterServiceAPI } from "../../../masterServiceAPI";
import { addLSGD, fetchLSGD, updateLSGD, fetchAllLSGD } from "./LSGD";

export const LSGDApi = masterServiceAPI.injectEndpoints({
  endpoints: (build) => ({
    addLSGD: addLSGD(build),
    fetchLSGD: fetchLSGD(build),
    updateLSGD: updateLSGD(build),
    fetchAllLSGD: fetchAllLSGD(build),
  }),
  overrideExisting: false,
});

export const {
  useAddLSGDMutation,
  useLazyFetchLSGDQuery,
  useUpdateLSGDMutation,
  useLazyFetchAllLSGDQuery,
} = LSGDApi;
