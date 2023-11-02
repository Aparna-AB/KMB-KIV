import { pagination } from "../../../../utils/constants";

export const fetchLorryDetails = (build) => {
  return build.query({
    query: ({ searchParams, page, zoneId }) => {
      const url = searchParams
        ? `list/lorryDetail/?userId=${zoneId}&limit=${pagination.limit}&page=${
            page || 1
          }&search=${searchParams || ""}`
        : `list/lorryDetail/?userId=${zoneId}&limit=${pagination.limit}&page=${
            page || 1
          }`;

      return url;
    },
  });
};
