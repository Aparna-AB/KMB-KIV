import { masterServiceAPI } from "../../../masterServiceAPI";
import { addTonLimit, fetchTonLimit, updateTonLimit, } from "./tonLimit";

export const TonLimitApi = masterServiceAPI.injectEndpoints({
  endpoints: (build) => ({
    addTonLimit: addTonLimit(build),
    fetchTonLimit: fetchTonLimit(build),
    updateTonLimit: updateTonLimit(build),
    // fetchPorton: fetchPorton(build),
  
  }),
  overrideExisting: false,
});

export const {
  useAddTonLimitMutation,
  useLazyFetchTonLimitQuery,
  useUpdateTonLimitMutation,
  // useLazyFetchPortonQuery
} = TonLimitApi;
