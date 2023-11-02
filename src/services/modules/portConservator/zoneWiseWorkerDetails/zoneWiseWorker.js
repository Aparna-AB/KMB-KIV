import { pagination } from "../../../../utils/constants";

export const fetchWorkerRegistration = (build) => {
  return build.query({
    query: ({ searchParams, page, zoneId }) => {
      return `workerRegistration/${zoneId}`;
    },
  });
};
