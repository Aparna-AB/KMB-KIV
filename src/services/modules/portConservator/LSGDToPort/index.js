import { masterServiceAPI } from "../../../masterServiceAPI";
import {
  addLSGDToPort,
  fetchLSGDToPort,
  updateLSGDToPort,
  fetchAllLSGDToPort,
  fetchLSGDToPortByUserId,
} from "./LSGDToPort";

export const LSGDToPortApi = masterServiceAPI.injectEndpoints({
  endpoints: (build) => ({
    addLSGDToPort: addLSGDToPort(build),
    fetchLSGDToPort: fetchLSGDToPort(build),
    updateLSGDToPort: updateLSGDToPort(build),
    fetchAllLSGDToPort: fetchAllLSGDToPort(build),
    fetchLSGDToPortByUserId: fetchLSGDToPortByUserId(build),
  }),
  overrideExisting: false,
});

export const {
  useAddLSGDToPortMutation,
  useLazyFetchLSGDToPortQuery,
  useUpdateLSGDToPortMutation,
  useLazyFetchAllLSGDToPortQuery,
  useLazyFetchLSGDToPortByUserIdQuery,
} = LSGDToPortApi;
