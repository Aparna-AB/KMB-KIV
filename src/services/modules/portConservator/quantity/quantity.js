import { pagination } from "../../../../utils/constants";

export const addQuantity = (build) =>
  build.mutation({
    query: (data) => ({
      url: `quantity`,
      method: "post",
      body: data,
    }),
  });

export const fetchQuantity = (build) => {
  return build.query({
    query: ({ searchParams, page, userId }) => {
      const url = searchParams
        ? `quantity/?status=Active,Inactive&limit=${pagination.limit}&page=${
            page || 1
          }&search=${searchParams || ""}&userId=${userId}`
        : `quantity/?status=Active,Inactive&limit=${pagination.limit}&page=${
            page || 1
          }&userId=${userId}`;

      return url;
    },
  });
};

export const fetchAllQuantity = (build) => {
  return build.query({
    query: () => {
      const url = `quantity/?status=Active`;

      return url;
    },
  });
};

export const FetchbyZoneId = (build) => {
  return build.query({
    query: ({ zoneId }) => {
      const url = `quantity/byId/${zoneId}`;
      return url;
    },
  });
};

export const updateQuantity = (build) =>
  build.mutation({
    query: ({ data, id }) => ({
      url: `quantity/${id}`,
      method: "put",
      body: data,
    }),
  });
