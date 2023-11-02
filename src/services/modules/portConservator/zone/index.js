import { masterServiceAPI } from "../../../masterServiceAPI";
import {
  addZone,
  fetchZone,
  updateZone,
  fetchAllZone,
  fetchZoneLSGD,
  fetchZoneById,
  fetchZoneByUserId,
} from "./zone";

export const zoneApi = masterServiceAPI.injectEndpoints({
  endpoints: (build) => ({
    addZone: addZone(build),
    fetchZone: fetchZone(build),
    updateZone: updateZone(build),
    fetchAllZone: fetchAllZone(build),
    fetchZoneLSGD: fetchZoneLSGD(build),
    fetchZoneById: fetchZoneById(build),
    fetchZoneByUserId: fetchZoneByUserId(build),
  }),
  overrideExisting: false,
});

export const {
  useAddZoneMutation,
  useLazyFetchZoneQuery,
  useUpdateZoneMutation,
  useLazyFetchAllZoneQuery,
  useFetchZoneLSGDQuery,
  useLazyFetchZoneByIdQuery,
  useLazyFetchZoneByUserIdQuery,
} = zoneApi;
