import { pagination } from "../../../../utils/constants";

export const fetchSearchBooking = (build) => {
  return build.query({
    query: ({ searchParam }) => {
      return `list/search/${searchParam}`;
    },
  });
};
