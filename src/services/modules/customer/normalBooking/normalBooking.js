import { pagination } from "../../../../utils/constants";

export const normalBook = (build) =>
  build.mutation({
    query: (data) => ({
      url: `sandBooking`,
      method: "post",
      body: data,
    }),
  });

export const fetchSpotBooking = (build) => {
  return build.query({
    query: ({ searchParams, page }) => {
      const url = searchParams
        ? `sandBooking/?status=Active&limit=${pagination.limit}&page=${
            page || 1
          }&search=${searchParams || ""}`
        : `sandBooking/?status=Active&limit=${pagination.limit}&page=${
            page || 1
          }`;

      return url;
    },
  });
};

export const fetchPort = (build) => {
  return build.query({
    query: () => {
      const url = `port/?status=Active`;
      return url;
    },
  });
};

export const fetchZone = (build) => {
  return build.query({
    query: () => {
      const url = `zone/?status=Active`;
      return url;
    },
  });
};

export const updateBank = (build) =>
  build.mutation({
    query: ({ data, id }) => ({
      url: `bank/${id}`,
      method: "put",
      body: data,
    }),
  });
