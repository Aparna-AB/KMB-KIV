import { pagination } from "../../../../utils/constants";

export const addZoneToPort = (build) =>
  build.mutation({
    query: (data) => ({
      url: `zoneToLsgd`,
      method: "post",
      body: data,
    }),
  });

export const fetchZoneToPort = (build) => {
  return build.query({
    query: ({ searchParams, page, userId }) => {
      const url = searchParams
        ? `zoneToLsgd/?status=Active,Inactive&limit=${pagination.limit}&page=${
            page || 1
          }&search=${searchParams || ""}&userId=${userId}`
        : `zoneToLsgd/?status=Active,Inactive&limit=${pagination.limit}&page=${
            page || 1
          }&userId=${userId}`;

      return url;
    },
  });
};

export const fetchAllZoneToPort = (build) => {
  return build.query({
    query: () => {
      const url = `zoneToLsgd/?status=Active`;

      return url;
    },
  });
};

export const updateZoneToPort = (build) =>
  build.mutation({
    query: ({ data, id }) => ({
      url: `zoneToLsgd/${id}`,
      method: "put",
      body: data,
    }),
  });
