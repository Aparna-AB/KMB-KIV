import { pagination } from "../../../../utils/constants";

export const fetchZoneBookingStatus = (build) => {
  return build.query({
    query: ({ searchParams, page, userId }) => {
      const url = searchParams
        ? `list/bookingStatus/?limit=${pagination.limit}&page=${
            page || 1
          }&search=${searchParams || ""}&userId=${userId}`
        : `list/bookingStatus/?&limit=${pagination.limit}&page=${
            page || 1
          }&userId=${userId}`;

      return url;
    },
  });
};
