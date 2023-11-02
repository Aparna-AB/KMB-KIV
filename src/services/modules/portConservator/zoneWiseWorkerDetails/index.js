import { masterServiceAPI } from "../../../masterServiceAPI";
import { fetchWorkerRegistration } from "./zoneWiseWorker";

export const searchApi = masterServiceAPI.injectEndpoints({
  endpoints: (build) => ({
    fetchWorkerRegistration: fetchWorkerRegistration(build),
  }),
  overrideExisting: false,
});

export const { useLazyFetchWorkerRegistrationQuery } = searchApi;
