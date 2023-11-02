import { masterServiceAPI } from "../../../masterServiceAPI";
import { addWorkers, fetchWorkers, updateWorkers } from "./workRegistration";

export const workRegistrationApi = masterServiceAPI.injectEndpoints({
  endpoints: (build) => ({
    addWorkers: addWorkers(build),
    fetchWorkers: fetchWorkers(build),
    updateWorkers: updateWorkers(build),
  }),
  overrideExisting: false,
});

export const {
  useAddWorkersMutation,
  useLazyFetchWorkersQuery,
  useUpdateWorkersMutation,
} = workRegistrationApi;
