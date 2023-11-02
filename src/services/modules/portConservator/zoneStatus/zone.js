import { pagination } from "../../../../utils/constants";

export const fetchZoneStatus = (build) => {
  return build.query({
    query: ({ searchParams, page, zoneId, month }) => {
      const url = searchParams
        ? `zone/getstatus?status=Active&limit=${pagination.limit}&page=${
            page || 1
          }&search=${searchParams || ""}&zone_id=${zoneId || ""}&month=${
            month || new Date()
          }`
        : `zone/getstatus?status=Active&limit=${pagination.limit}&page=${
            page || 1
          }&zone_id=${zoneId}&month=${month || new Date()}`;

      return url;
    },
  });
};
