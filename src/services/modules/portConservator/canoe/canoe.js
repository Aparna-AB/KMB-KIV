import { pagination } from "../../../../utils/constants";

export const addCanoe = (build) =>
  build.mutation({
    query: (data) => ({
      url: `canoe`,
      method: "post",
      body: data,
    }),
  });

export const fetchCanoe = (build) => {
  return build.query({
    query: ({ searchParams, page, userId }) => {
      const url = searchParams
        ? `canoe/?status=Active&limit=${pagination.limit}&page=${
            page || 1
          }&search=${searchParams || ""}&userId=${userId}`
        : `canoe/?status=Active&limit=${pagination.limit}&page=${
            page || 1
          }&userId=${userId}`;

      return url;
    },
  });
};

export const fetchAllCanoe = (build) => {
  return build.query({
    query: () => {
      const url = `canoe/?status=Active`;

      return url;
    },
  });
};

export const updateCanoe = (build) =>
  build.mutation({
    query: ({ data, id }) => ({
      url: `canoe/${id}`,
      method: "put",
      body: data,
    }),
  });
