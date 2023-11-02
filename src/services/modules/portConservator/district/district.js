import { pagination } from "../../../../utils/constants";

export const addDistrict = (build) =>
  build.mutation({
    query: (data) => ({
      url: `district`,
      method: "post",
      body: data,
    }),
  });

export const fetchDistrict = (build) => {
  return build.query({
    query: ({ searchParams, page }) => {
      const url = searchParams
        ? `district/?status=Active,Inactive&limit=${pagination.limit}&page=${
            page || 1
          }&search=${searchParams || ""}`
        : `district/?status=Active,Inactive&limit=${pagination.limit}&page=${
            page || 1
          }`;

      return url;
    },
  });
};

export const fetchAllDistrict = (build) => {
  return build.query({
    query: () => {
      const url = `district/?status=Active`;

      return url;
    },
  });
};

export const updateDistrict = (build) =>
  build.mutation({
    query: ({ data, id }) => ({
      url: `district/${id}`,
      method: "put",
      body: data,
    }),
  });
