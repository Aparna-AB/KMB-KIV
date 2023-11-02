import { masterServiceAPI } from "../../../masterServiceAPI";
import {
  addPort,
  fetchPort,
  updatePort,
  fetchAllPort,
  fetchAllZone,
} from "./port";

export const PortApi = masterServiceAPI.injectEndpoints({
  endpoints: (build) => ({
    addPort: addPort(build),
    fetchPort: fetchPort(build),
    updatePort: updatePort(build),
    fetchAllPort: fetchAllPort(build),
    fetchAllZone: fetchAllZone(build),
  }),
  overrideExisting: false,
});

export const {
  useAddPortMutation,
  useLazyFetchPortQuery,
  useUpdatePortMutation,
  useLazyFetchAllPortQuery,
  useLazyFetchAllZoneQuery,
} = PortApi;
