import { pagination } from "../../../../utils/constants";

export const addPermit = (build) =>
  build.mutation({
    query: (data) => ({
      url: `monthly_permit`,
      method: "post",
      body: data,
    }),
  });

// export const fetchPermit = (build) => {
//   return build.query({
//     query: ({ searchParams, page, userId }) => {
//       const url = searchParams
//         ? `monthly_permit/?status=Active&search=${
//             searchParams || ""
//           }&userId=${userId}`
//         : `monthly_permit/?status=Active&userId=${userId}`;

//       return url;
//     },
//   });
// };
export const fetchPermit = (build) => {
  return build.query({
    query: ({ searchParams, page, userId }) => {
      const url = searchParams
        ? `monthly_permit/?limit=${pagination.limit}&page=${page || 1}&search=${
            searchParams || ""
          }&portId=${userId}`
        : `monthly_permit/?limit=${pagination.limit}&page=${
            page || 1
          }&portId=${userId}`;

      return url;
    },
  });
};

export const fetchLSGDPermit = (build) => {
  return build.query({
    query: ({ searchParams, page, lsgdId }) => {
      const url = searchParams
        ? `monthly_permit/?limit=${pagination.limit}&page=${page || 1}&search=${
            searchParams || ""
          }&lsgdId=${lsgdId}`
        : `monthly_permit/?limit=${pagination.limit}&page=${
            page || 1
          }&lsgdId=${lsgdId}`;

      return url;
    },
  });
};

export const updateMonthlyPermit = (build) =>
  build.mutation({
    query: ({ data, id }) => ({
      url: `monthly_permit/${id}`,
      method: "put",
      body: data,
    }),
  });
