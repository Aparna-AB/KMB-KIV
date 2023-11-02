import { pagination } from "../../../../utils/constants";

export const addUserRegistration = (build) =>
  build.mutation({
    query: (data) => ({
      url: `auth/register/`,
      method: "post",
      body: data,
    }),
  });

export const fileUpload = (build) =>
  build.mutation({
    query: (data) => ({
      url: `users/fileupload/`,
      method: "post",
      body: data,
      FormData: true,
    }),
  });

// export const fetchUserRegistration = (build) => {
//   return build.query({
//     query: ({ searchParams, page, portId }) => {
//       const url = searchParams
//         ? `user-details/port/${portId}?status=Active&limit=${
//             pagination.limit
//           }&page=${page || 1}&search=${searchParams || ""}`
//         : `user-details/port/${portId}/?status=Active&limit=${
//             pagination.limit
//           }&page=${page || 1}`;

//       return url;
//     },
//   });
// };

export const fetchUserRegistration = (build) => {
  return build.query({
    query: ({ searchParams, page }) => {
      const url = searchParams
        ? `user-details/?status=Active&limit=${pagination.limit}&page=${
            page || 1
          }&search=${searchParams || ""}`
        : `user-details/?status=Active&limit=${pagination.limit}&page=${
            page || 1
          }`;

      return url;
    },
  });
};

export const fetchAllUserRegistration = (build) => {
  return build.query({
    query: () => {
      const url = `user-details/?status=Active`;

      return url;
    },
  });
};

export const updateUserRegistration = (build) =>
  build.mutation({
    query: ({ data, id }) => ({
      url: `user-details/${id}`,
      method: "put",
      body: data,
    }),
  });
