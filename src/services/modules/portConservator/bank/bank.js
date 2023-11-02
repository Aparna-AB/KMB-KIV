import { pagination } from "../../../../utils/constants";

export const addBank = (build) =>
  build.mutation({
    query: (data) => ({
      url: `bank`,
      method: "post",
      body: data,
    }),
  });

export const fetchBank = (build) => {
  return build.query({
    query: ({ searchParams, page, userId }) => {
      const url = searchParams
        ? `bank/?status=Active,Inactive&limit=${pagination.limit}&page=${
            page || 1
          }&search=${searchParams || ""}&userId=${userId}`
        : `bank/?status=Active,Inactive&limit=${pagination.limit}&page=${
            page || 1
          }&userId=${userId}`;

      return url;
    },
  });
};

export const updateBank = (build) =>
  build.mutation({
    query: ({ data, id }) => ({
      url: `bank/${id}`,
      method: "put",
      body: data,
    }),
  });
