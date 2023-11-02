import { pagination } from "../../../../utils/constants";

export const fetchSandPass = (build) => {
  return build.query({
    query: ({ searchParams, page, zoneId }) => {
      const url = searchParams
        ? `sandBooking/sandpass/${zoneId}/?limit=${pagination.limit}&page=${
            page || 1
          }&search=${searchParams || ""}`
        : `sandBooking/sandpass/${zoneId}/?limit=${pagination.limit}&page=${
            page || 1
          }`;

      return url;
    },
  });
};
