import { pagination } from "../../../../utils/constants";

export const reprintRequest = (build) =>
  build.mutation({
    query: (data) => ({
      url: `list/reprintRequest`,
      method: "post",
      body: data,
    }),
  });

export const fetchReprint = (build) => {
  return build.query({
    query: ({ searchParams, page,userId }) => {
      const url = searchParams
        ? `list/requestList/?limit=${pagination.limit}&page=${
            page || 1
          }&search=${searchParams || ""}&userId=${userId}
          `
        : `list/requestList/?limit=${pagination.limit}&page=${
            page || 1
          }&userId=${userId}`;

      return url;
    },
  });
};
export const approveRequest = (build) =>
  build.mutation({
    query: ({ data, id }) => ({
      url: `list/approveRequest/${id}`,
      method: "put",
      body: data,
    }),
  });
  export const fetchReIssueList = (build) => {
    return build.query({
      query: ({ searchParams, page, userId}) => {
        const url = searchParams
          ? `list/reissueList/?limit=${pagination.limit}&page=${
              page || 1
            }&search=${searchParams || ""}&userId=${userId}
            `
          : `list/reissueList/?limit=${pagination.limit}&page=${
              page || 1
            }&userId=${userId}`;
  
        return url;
      },
    });
  };
  export const downloadReprint = (build) => {
    return build.query({
      query: ({ token }) => {
        console.log("service",token);
    const url = `list/passReprint/${token}`;
        return url;
      },
    });
  };
 