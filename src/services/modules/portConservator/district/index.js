import { masterServiceAPI } from "../../../masterServiceAPI";
import {
  addDistrict,
  fetchDistrict,
  updateDistrict,
  fetchAllDistrict,
} from "./district";

export const DistrictApi = masterServiceAPI.injectEndpoints({
  endpoints: (build) => ({
    addDistrict: addDistrict(build),
    fetchDistrict: fetchDistrict(build),
    updateDistrict: updateDistrict(build),
    fetchAllDistrict: fetchAllDistrict(build),
  }),
  overrideExisting: false,
});

export const {
  useAddDistrictMutation,
  useLazyFetchDistrictQuery,
  useUpdateDistrictMutation,
  useLazyFetchAllDistrictQuery,
} = DistrictApi;
