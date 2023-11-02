import { pagination } from "../../../../utils/constants";

export const addSandRate = (build) =>
  build.mutation({
    query: (data) => ({
      url: `rate`,
      method: "post",
      body: data,
    }),
  });

export const fetchSandRate = (build) => {
  return build.query({
    query: ({ searchParams, page }) => {
      const url = searchParams
        ? `rate/?status=Active&limit=${pagination.limit}&page=${
            page || 1
          }&search=${searchParams || ""}`
        : `rate/?status=Active&limit=${pagination.limit}&page=${page || 1}`;

      return url;
    },
  });
};

export const fetchAllSandRate = (build) => {
  return build.query({
    query: () => {
      const url = `rate/?status=Active`;

      return url;
    },
  });
};

export const updateSandRate = (build) =>
  build.mutation({
    query: ({ data, id }) => ({
      url: `rate/${id}`,
      method: "put",
      body: data,
    }),
  });
