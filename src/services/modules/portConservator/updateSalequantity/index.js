import { masterServiceAPI } from "../../../masterServiceAPI";
import {
  addSaleQuantity,
  fetchSaleQuantity,
  addOne,
  reduceOne,
  
} from "./updateQuantity";

export const SaleQuantityApi = masterServiceAPI.injectEndpoints({
  endpoints: (build) => ({
    addSaleQuantity: addSaleQuantity(build),
    fetchSaleQuantity: fetchSaleQuantity(build),
    addOne: addOne(build),
    reduceOne: reduceOne(build),
    }),
  overrideExisting: false,
});

export const {
  useAddSaleQuantityMutation,
  useAddOneMutation,
  useReduceOneMutation,
  useLazyFetchSaleQuantityQuery,
  
  
} = SaleQuantityApi;
