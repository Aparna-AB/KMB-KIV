import { pagination } from "../../../../utils/constants";

export const addLorry = (build) =>
  build.mutation({
    query: (data) => ({
      url: `lorryRegistration`,
      method: "post",
      body: data,
    }),
  });

export const fetchLorry = (build) => {
  return build.query({
    query: ({ searchParams, page, userId, lsgdId }) => {
      const url = searchParams
        ? `lorryRegistration/?status=Active&search=${
            searchParams || ""
          }&userId=${userId}&lsgdId=${lsgdId}`
        : `lorryRegistration/?status=Active&userId=${userId}&lsgdId=${lsgdId}`;

      return url;
    },
  });
};

export const updateLorry = (build) =>
  build.mutation({
    query: ({ data, id }) => ({
      url: `lorryRegistration/${id}`,
      method: "put",
      body: data,
    }),
  });
