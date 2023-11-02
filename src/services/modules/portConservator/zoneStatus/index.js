import { masterServiceAPI } from "../../../masterServiceAPI";
import { fetchZoneStatus } from "./zone";

export const zoneApi = masterServiceAPI.injectEndpoints({
  endpoints: (build) => ({
    fetchZoneStatus: fetchZoneStatus(build),
  }),
  overrideExisting: false,
});

export const { useLazyFetchZoneStatusQuery } = zoneApi;
