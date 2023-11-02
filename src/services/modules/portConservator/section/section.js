import { pagination } from "../../../../utils/constants";

export const addsection = (build) =>
  build.mutation({
    query: (data) => ({
      url: `section`,
      method: "post",
      body: data,
    }),
  });

export const fetchsection = (build) => {
  return build.query({
    query: ({ searchParams, page, userId }) => {
      const url = searchParams
        ? `section/?status=Active,Inactive&limit=${pagination.limit}&page=${
            page || 1
          }&search=${searchParams || ""}&userId=${userId}`
        : `section/?status=Active,Inactive&limit=${pagination.limit}&page=${
            page || 1
          }&userId=${userId}`;

      return url;
    },
  });
};

export const fetchAllsection = (build) => {
  return build.query({
    query: () => {
      const url = `section/?status=Active`;

      return url;
    },
  });
};

export const updatesection = (build) =>
  build.mutation({
    query: ({ data, id }) => ({
      url: `section/${id}`,
      method: "put",
      body: data,
    }),
  });
