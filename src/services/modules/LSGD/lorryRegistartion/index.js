import { masterServiceAPI } from "../../../masterServiceAPI";
import { addLorry, fetchLorry, updateLorry } from "./lorryRegistration";

export const lorryRegistrationApi = masterServiceAPI.injectEndpoints({
  endpoints: (build) => ({
    addLorry: addLorry(build),
    fetchLorry: fetchLorry(build),
    updateLorry: updateLorry(build),
  }),
  overrideExisting: false,
});

export const {
  useAddLorryMutation,
  useLazyFetchLorryQuery,
  useUpdateLorryMutation,
} = lorryRegistrationApi;
