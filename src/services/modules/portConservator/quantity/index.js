import { masterServiceAPI } from "../../../masterServiceAPI";
import {
  addQuantity,
  fetchQuantity,
  updateQuantity,
  fetchAllQuantity,
  FetchbyZoneId,
} from "./quantity";

export const QuantityApi = masterServiceAPI.injectEndpoints({
  endpoints: (build) => ({
    addQuantity: addQuantity(build),
    fetchQuantity: fetchQuantity(build),
    updateQuantity: updateQuantity(build),
    fetchAllQuantity: fetchAllQuantity(build),
    FetchbyZoneId: FetchbyZoneId(build),
  }),
  overrideExisting: false,
});

export const {
  useAddQuantityMutation,
  useLazyFetchQuantityQuery,
  useUpdateQuantityMutation,
  useLazyFetchAllQuantityQuery,
  useLazyFetchbyZoneIdQuery,
} = QuantityApi;
