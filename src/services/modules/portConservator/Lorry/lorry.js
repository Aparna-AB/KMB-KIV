import { pagination } from "../../../../utils/constants";

export const fetchLorryDetails = (build) => {
  return build.query({
    query: ({ searchParams, page, userId }) => {
      const url = searchParams
        ? `lorryRegistration/detail/?userId=${userId}&limit=${
            pagination.limit
          }&page=${page || 1}&search=${searchParams || ""}`
        : `lorryRegistration/detail/?userId=${userId}&limit=${
            pagination.limit
          }&page=${page || 1}`;

      return url;
    },
  });
};

export const updateLorryRegistration = (build) =>
  build.mutation({
    query: ({ data, id }) => ({
      url: `/lorryRegistration/${id}`,
      method: "put",
      body: data,
    }),
  });
export const updateLorryStatus = (build) =>
  build.mutation({
    query: ({ data, id }) => ({
      url: `/lorryRegistration/status/${id}`,
      method: "put",
      body: data,
    }),
  });
