// import { pagination } from "../../../../utils/constants";

export const login = (build) =>
  build.mutation({
    query: (data) => ({
      url: `auth/login/`,
      method: "post",
      body: data,
    }),
  });
