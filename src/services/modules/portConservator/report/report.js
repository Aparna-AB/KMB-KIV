import { pagination } from "../../../../utils/constants";

export const getPcReports = (build) => {
  return build.query({
    query: ({ searchParams, page }) => {
      const url = searchParams
        ? `port/?status=Active&limit=${pagination.limit}&page=${
            page || 1
          }&search=${searchParams || ""}`
        : `port/?status=Active&limit=${pagination.limit}&page=${page || 1}`;

      return url;
    },
  });
};

export const fetchAllPort = (build) => {
  return build.query({
    query: () => {
      const url = `port/?status=Active`;

      return url;
    },
  });
};

export const updatePort = (build) =>
  build.mutation({
    query: ({ data, id }) => ({
      url: `port/${id}`,
      method: "put",
      body: data,
    }),
  });

export const fetchAllZone = (build) => {
  return build.query({
    query: () => {
      const url = `zone/?status=Active`;

      return url;
    },
  });
};
