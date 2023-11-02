import { pagination } from "../../../../utils/constants";

export const addLSGDToPort = (build) =>
  build.mutation({
    query: (data) => ({
      url: `lsgd`,
      method: "post",
      body: data,
    }),
  });

export const fetchLSGDToPort = (build) => {
  return build.query({
    query: ({ searchParams, page, userId }) => {
      const url = searchParams
        ? `lsgd/?status=Active,Inactive&limit=${pagination.limit}&page=${
            page || 1
          }&search=${searchParams || ""}&userId=${userId}`
        : `lsgd/?status=Active,Inactive&limit=${pagination.limit}&page=${
            page || 1
          }&userId=${userId}`;

      return url;
    },
  });
};

export const fetchAllLSGDToPort = (build) => {
  return build.query({
    query: () => {
      const url = `lsgd/?status=Active`;

      return url;
    },
  });
};

export const updateLSGDToPort = (build) =>
  build.mutation({
    query: ({ data, id }) => ({
      url: `lsgd/${id}`,
      method: "put",
      body: data,
    }),
  });

export const fetchLSGDToPortByUserId = (build) => {
  return build.query({
    query: ({ page, userId }) => {
      const url = `lsgd_master/?status=Active&limit=${500}&page=${
        page || 1
      }&userId=${userId}`;

      return url;
    },
  });
};
