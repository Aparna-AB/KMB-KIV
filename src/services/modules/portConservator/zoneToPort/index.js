import { masterServiceAPI } from "../../../masterServiceAPI";
import {
  addZoneToPort,
  fetchZoneToPort,
  updateZoneToPort,
  fetchAllZoneToPort,
} from "./zoneToPort";

export const ZoneToPortApi = masterServiceAPI.injectEndpoints({
  endpoints: (build) => ({
    addZoneToPort: addZoneToPort(build),
    fetchZoneToPort: fetchZoneToPort(build),
    updateZoneToPort: updateZoneToPort(build),
    fetchAllZoneToPort: fetchAllZoneToPort(build),
  }),
  overrideExisting: false,
});

export const {
  useAddZoneToPortMutation,
  useLazyFetchZoneToPortQuery,
  useUpdateZoneToPortMutation,
  useLazyFetchAllZoneToPortQuery,
} = ZoneToPortApi;
