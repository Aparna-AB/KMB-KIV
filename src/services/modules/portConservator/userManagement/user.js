import { pagination } from "../../../../utils/constants";

export const addUser = (build) =>
  build.mutation({
    query: (data) => ({
      url: `admin/admin_register`,
      method: "post",
      body: data,
    }),
  });

export const fetchZoneUser = (build) => {
  return build.query({
    query: ({ searchParams, page, userId }) => {
      const url = searchParams
        ? `admin/list_zoneuser/?status=active,Inactive&limit=${
            pagination.limit
          }&page=${page || 1}&search=${searchParams || ""}&userId=${userId}`
        : `admin/list_zoneuser/?status=active,Inactive&limit=${
            pagination.limit
          }&page=${page || 1}&userId=${userId}`;
      return url;
    },
  });
};
export const fetchLsgdUser = (build) => {
  return build.query({
    query: ({ searchParams, page, userId }) => {
      const url = searchParams
        ? `admin/list_lsgduser/?status=active&limit=${pagination.limit}&page=${
            page || 1
          }&search=${searchParams || ""}&userId=${userId}`
        : `admin/list_lsgduser/?status=active&limit=${pagination.limit}&page=${
            page || 1
          }&userId=${userId}`;
      return url;
    },
  });
};

export const updateUser = (build) =>
  build.mutation({
    query: ({ data, id }) => ({
      url: `admin/edit_portuser?id=${id}`,
      method: "put",
      body: data,
    }),
  });
export const deleteUser = (build) =>
  build.mutation({
    query: ({ data, id }) => ({
      url: `admin/delete_portuser?id=${id}`,
      method: "put",
      body: data,
    }),
  });
export const changeCustomerNo = (build) =>
  build.mutation({
    query: ({ data, userId }) => ({
      url: `user-details?userId=${userId}`,
      method: "put",
      body: data,
    }),
  });
