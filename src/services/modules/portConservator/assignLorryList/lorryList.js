import { pagination } from "../../../../utils/constants";

export const fetchAssignLorry = (build) => {
  return build.query({
    query: ({ searchParams, page, userId }) => {
      const url = searchParams
        ? `list/lorryList/${userId}/?limit=${pagination.limit}&page=${
            page || 1
          }&search=${searchParams || ""}`
        : `list/lorryList/${userId}/?limit=${pagination.limit}&page=${
            page || 1
          }`;

      return url;
    },
  });
};

export const updateAssignLorry = (build) =>
  build.mutation({
    query: ({ data, id }) => ({
      url: `list/lorryList/${id}`,
      method: "put",
      body: data,
    }),
  });
