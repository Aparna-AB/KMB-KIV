import { masterServiceAPI } from "../../../masterServiceAPI";
import { addBank, fetchBank, updateBank } from "./bank";

export const bankApi = masterServiceAPI.injectEndpoints({
  endpoints: (build) => ({
    addBank: addBank(build),
    fetchBank: fetchBank(build),
    updateBank: updateBank(build),
  }),
  overrideExisting: false,
});

export const {
  useAddBankMutation,
  useLazyFetchBankQuery,
  useUpdateBankMutation,
} = bankApi;
