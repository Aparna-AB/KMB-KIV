import { pagination } from "../../../../utils/constants";

export const addLSGD = (build) =>
  build.mutation({
    query: (data) => ({
      url: `lsgd_master`,
      method: "post",
      body: data,
    }),
  });

export const fetchLSGD = (build) => {
  return build.query({
    query: ({ searchParams, page, userId }) => {
      const url = searchParams
        ? `lsgd_master/?status=Active,Inactive&limit=${pagination.limit}&page=${
            page || 1
          }&search=${searchParams || ""}&userId=${userId}`
        : `lsgd_master/?status=Active,Inactive&limit=${pagination.limit}&page=${
            page || 1
          }&userId=${userId}`;

      return url;
    },
  });
};

export const fetchAllLSGD = (build) => {
  return build.query({
    query: () => {
      const url = `lsgd_master/?status=Active`;

      return url;
    },
  });
};

export const updateLSGD = (build) =>
  build.mutation({
    query: ({ data, id }) => ({
      url: `lsgd_master/${id}`,
      method: "put",
      body: data,
    }),
  });
