import { pagination } from "../../../../utils/constants";

export const addSaleQuantity = (build) =>
  build.mutation({
    query: (data) => ({
      url: `saleQuantity`,
      method: "post",
      body: data,
    }),
  });

export const fetchSaleQuantity = (build) => {
  return build.query({
    query: ({ searchParams, page, userId }) => {
      const url = searchParams
        ? `saleQuantity/?limit=${pagination.limit}&page=${page || 1}&search=${
            searchParams || ""
          }&userId=${userId}`
        : `saleQuantity/?limit=${pagination.limit}&page=${
            page || 1
          }&userId=${userId}`;

      return url;
    },
  });
};

export const addOne = (build) =>
  build.mutation({
    query: ({ data }) => ({
      url: `saleQuantity/add`,
      method: "post",
      body: data,
    }),
  });
export const reduceOne = (build) =>
  build.mutation({
    query: ({ data, id }) => ({
      url: `saleQuantity/reduce`,
      method: "post",
      body: data,
    }),
  });
