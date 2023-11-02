import { pagination } from "../../../../utils/constants";

export const addPortConservator = (build) =>
  build.mutation({
    query: (data) => ({
      url: `admin/admin_register`,
      method: "post",
      body: data,
    }),
  });

export const fetchPortConservator = (build) => {
  return build.query({
    query: ({ searchParams, page }) => {
      // const url = `admin/list_portuser`;
      const url = searchParams
        ? `admin/list_portuser/?status=active&limit=${pagination.limit}&page=${
            page || 1
          }&search=${searchParams || ""}`
        : `admin/list_portuser/?status=active&limit=${pagination.limit}&page=${
            page || 1
          }`;
      return url;
    },
  });
};

export const updatePortConservator = (build) =>
  build.mutation({
    query: ({ data, id }) => ({
      url: `admin/edit_portuser?id=${id}`,
      method: "put",
      body: data,
    }),
  });
