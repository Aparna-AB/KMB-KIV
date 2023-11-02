import { pagination } from "../../../../utils/constants";

export const addWorkers = (build) =>
  build.mutation({
    query: (data) => ({
      url: `workerRegistration`,
      method: "post",
      body: data,
    }),
  });

export const fetchWorkers = (build) => {
  return build.query({
    query: ({ searchParams, page, userId, lsgdId }) => {
      const url = searchParams
        ? `workerRegistration/?status=Active&limit=${pagination.limit}&page=${
            page || 1
          }&search=${searchParams || ""}&userId=${userId}&lsgdId=${lsgdId}`
        : `workerRegistration/?status=Active&limit=${pagination.limit}&page=${
            page || 1
          }&userId=${userId}&lsgdId=${lsgdId}`;

      return url;
    },
  });
};

export const updateWorkers = (build) =>
  build.mutation({
    query: ({ data, id }) => ({
      url: `workerRegistration/${id}`,
      method: "put",
      body: data,
    }),
  });
