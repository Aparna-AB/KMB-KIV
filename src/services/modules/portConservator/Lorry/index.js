import { assignLorry, vehiclePassDetails } from "./assignLorry";
import {
  fetchLorryDetails,
  updateLorryRegistration,
  updateLorryStatus,
} from "./lorry";
import { masterServiceAPI } from "../../../masterServiceAPI";

export const AssignLorryApi = masterServiceAPI.injectEndpoints({
  endpoints: (build) => ({
    assignLorry: assignLorry(build),
    vehiclePassDetails: vehiclePassDetails(build),
    fetchLorryDetails: fetchLorryDetails(build),
    updateLorryRegistration: updateLorryRegistration(build),
    updateLorryStatus: updateLorryStatus(build),
  }),
  overrideExisting: false,
});

export const {
  useAssignLorryMutation,
  useLazyVehiclePassDetailsQuery,
  useLazyFetchLorryDetailsQuery,
  useUpdateLorryRegistrationMutation,
  useUpdateLorryStatusMutation,
} = AssignLorryApi;
