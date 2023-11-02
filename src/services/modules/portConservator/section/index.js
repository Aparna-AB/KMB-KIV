import { masterServiceAPI } from "../../../masterServiceAPI";
import {
  addsection,
  fetchsection,
  updatesection,
  fetchAllsection,
  
} from "./section";

export const SectionApi = masterServiceAPI.injectEndpoints({
  endpoints: (build) => ({
    addSection: addsection(build),
    fetchSection: fetchsection(build),
    updateSection: updatesection(build),
    fetchAllSection: fetchAllsection(build),
    }),
  overrideExisting: false,
});

export const {
  useAddSectionMutation,
  useLazyFetchSectionQuery,
  useUpdateSectionMutation,
  useLazyFetchAllSectionQuery,
  useLazyFetchAllZoneQuery,
  useLazyFetchAllLsgdQuery
} = SectionApi;
