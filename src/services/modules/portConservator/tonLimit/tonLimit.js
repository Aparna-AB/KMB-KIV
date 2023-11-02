import { pagination } from "../../../../utils/constants";

export const addTonLimit = (build) =>
  build.mutation({
    query: (data) => ({
      url: `spot/addTonLimit`,
      method: "post",
      body: data,
    }),
  });

export const fetchTonLimit = (build) => {
  return build.query({
    query: ({ searchParams, page, userId }) => {
      const url = `spot/tonLimit/?userId=${userId}&page=${page}&limit=${pagination.limit}`;

      return url;
    },
  });
};

export const updateTonLimit = (build) =>
  build.mutation({
    query: ({ data, id }) => ({}),
  });

  // export const fetchPorton = (build) => {
  //   return build.query({
  //     query: ({id}) => {
  //       const url = `spot/tonLimit`;
  //       return url;
  //     },
  //   });
  // };