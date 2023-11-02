import { pagination } from "../../../../utils/constants";

export const requestToChangeDate = (build) =>
  build.mutation({
    query: ({ userId }) => ({
      url: `sandBooking/requestChangeDate/?userId=${userId}`,
      method: "post",
      // body: data,
    }),
  });

export const fetchDateChangeRequest = (build) => {
  return build.query({
    query: ({ searchParams, page, userId }) => {
      // const url = `sandBooking?limit=${pagination.limit}&page=${page || 1}`;

      const url = searchParams
        ? `sandBooking/changeDateReqList/?limit=${pagination.limit}&page=${
            page || 1
          }&search=${searchParams || ""}&userId=${userId}&status=pending`
        : `sandBooking/changeDateReqList/?limit=${pagination.limit}&page=${
            page || 1
          }&userId=${userId}&status=pending`;

      return url;
    },
  });
};

export const updateDateRequest = (build) =>
  build.mutation({
    query: ({ postData }) => ({
      url: `sandBooking/changeDate`,
      method: "put",
      body: postData,
    }),
  });
