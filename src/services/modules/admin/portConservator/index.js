import { customerServiceAPI } from "../../../customerServiceApi";
import {
  addPortConservator,
  fetchPortConservator,
  updatePortConservator,
} from "./port";

export const PortConservatorApi = customerServiceAPI.injectEndpoints({
  endpoints: (build) => ({
    addPortConservator: addPortConservator(build),
    fetchPortConservator: fetchPortConservator(build),
    updatePortConservator: updatePortConservator(build),
  }),
  overrideExisting: false,
});

export const {
  useAddPortConservatorMutation,
  useLazyFetchPortConservatorQuery,
  useUpdatePortConservatorMutation,
} = PortConservatorApi;
