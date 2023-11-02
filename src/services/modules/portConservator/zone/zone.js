import { pagination } from "../../../../utils/constants";

export const addZone = (build) =>
  build.mutation({
    query: (data) => ({
      url: `zone`,
      method: "post",
      body: data,
    }),
  });

export const fetchZone = (build) => {
  return build.query({
    query: ({ searchParams, page, userId }) => {
      const url = searchParams
        ? `zone/?status=Active,Inactive&limit=${pagination.limit}&page=${
            page || 1
          }&search=${searchParams || ""}&userId=${userId}`
        : `zone/?status=Active,Inactive&limit=${pagination.limit}&page=${
            page || 1
          }&userId=${userId}`;

      return url;
    },
  });
};

export const fetchZoneLSGD = (build) => {
  return build.query({
    query: ({ searchParams, page }) => {
      const url = searchParams
        ? `zoneToLsgd/?status=Active&limit=${pagination.limit}&page=${
            page || 1
          }&search=${searchParams || ""}`
        : `zoneToLsgd/?status=Active&limit=${pagination.limit}&page=${
            page || 1
          }`;

      return url;
    },
  });
};

export const fetchAllZone = (build) => {
  return build.query({
    query: () => {
      const url = `zone/?status=Active`;

      return url;
    },
  });
};

export const updateZone = (build) =>
  build.mutation({
    query: ({ data, id }) => ({
      url: `zone/${id}`,
      method: "put",
      body: data,
    }),
  });

export const fetchZoneById = (build) => {
  return build.query({
    query: ({ id }) => {
      const url = `zoneToLsgd/lsgd/${id}`;

      return url;
    },
  });
};

export const fetchZoneByUserId = (build) => {
  return build.query({
    query: ({ searchParams, page, userId }) => {
      const url = searchParams
        ? `zone/?status=Active&page=${page || 1}&search=${
            searchParams || ""
          }&userId=${userId}&limit=${200}`
        : `zone/?status=Active&page=${page || 1}&userId=${userId}&limit=${200}`;

      return url;
    },
  });
};
