import { pagination } from "../../../../utils/constants";

export const fetchPCSaleReports = (build) => {
  return build.query({
    query: ({ fromDate, toDate, status, zoneId, portId }) => {
      let subUrl = "";
      if (fromDate && toDate) {
        subUrl = `&after=${fromDate || ""}&before=${toDate || ""}`;
      } else if (fromDate) {
        subUrl = `&after=${fromDate || ""}`;
      } else if (toDate) {
        subUrl = `&before=${toDate || ""}`;
      }
      const url = `reports/normal_list/?zone=${zoneId}&port=${portId}&status=${status}${subUrl}`;
      return url;
    },
  });
};

export const fetchPCSpotSaleReports = (build) => {
  return build.query({
    query: ({ fromDate, toDate, status, zoneId, portId }) => {
      let subUrl = "";
      if (fromDate && toDate) {
        subUrl = `&after=${fromDate || ""}&before=${toDate || ""}`;
      } else if (fromDate) {
        subUrl = `&after=${fromDate || ""}`;
      } else if (toDate) {
        subUrl = `&before=${toDate || ""}`;
      }

      const url = `reports/spot_list/?zone=${zoneId}&port=${portId}&status=${status}${subUrl}`;
      return url;
    },
  });
};

export const downloadPCSpotSaleReports = (build) => {
  return build.query({
    query: ({ fromDate, toDate, status, zoneId, portId }) => {
      let subUrl = "";
      if (fromDate && toDate) {
        subUrl = `&after=${fromDate || ""}&before=${toDate || ""}`;
      } else if (fromDate) {
        subUrl = `&after=${fromDate || ""}`;
      } else if (toDate) {
        subUrl = `&before=${toDate || ""}`;
      }

      const url = `reports/spot_reports/?&zone=${zoneId}&port=${portId}&status=${status}${subUrl}`;
      return url;
    },
  });
};

export const downloadPCSaleReports = (build) => {
  return build.query({
    query: ({ fromDate, toDate, status, zoneId, portId }) => {
      let subUrl = "";
      if (fromDate && toDate) {
        subUrl = `&after=${fromDate || ""}&before=${toDate || ""}`;
      } else if (fromDate) {
        subUrl = `&after=${fromDate || ""}`;
      } else if (toDate) {
        subUrl = `&before=${toDate || ""}`;
      }

      const url = `reports/normal_reports/?&zone=${zoneId}&port=${portId}&status=${status}${subUrl}`;
      return url;
    },
  });
};

export const fetchLsgdSaleRepots = (build) => {
  return build.query({
    query: ({ fromDate, toDate, status, zoneId, lsgdId }) => {
      let subUrl = "";
      if (fromDate && toDate) {
        subUrl = `&after=${fromDate || ""}&before=${toDate || ""}`;
      } else if (fromDate) {
        subUrl = `&after=${fromDate || ""}`;
      } else if (toDate) {
        subUrl = `&before=${toDate || ""}`;
      }
      const url = `reports/normal_list/?zone=${zoneId}&lsgd=${lsgdId}&status=${status}${subUrl}`;
      return url;
    },
  });
};

export const fetchLsgdSpotSaleReports = (build) => {
  return build.query({
    query: ({ fromDate, toDate, status, zoneId, lsgdId }) => {
      let subUrl = "";
      if (fromDate && toDate) {
        subUrl = `&after=${fromDate || ""}&before=${toDate || ""}`;
      } else if (fromDate) {
        subUrl = `&after=${fromDate || ""}`;
      } else if (toDate) {
        subUrl = `&before=${toDate || ""}`;
      }

      const url = `reports/spot_list/?&zone=${zoneId}&lsgd=${lsgdId}&status=${status}${subUrl}`;
      return url;
    },
  });
};

export const downloadLsgdSaleRepots = (build) => {
  return build.query({
    query: ({ fromDate, toDate, status, zoneId, lsgdId }) => {
      let subUrl = "";
      if (fromDate && toDate) {
        subUrl = `&after=${fromDate || ""}&before=${toDate || ""}`;
      } else if (fromDate) {
        subUrl = `&after=${fromDate || ""}`;
      } else if (toDate) {
        subUrl = `&before=${toDate || ""}`;
      }
      const url = `reports/normal_reports/?zone=${zoneId}&lsgd=${lsgdId}&status=${status}${subUrl}`;
      return url;
    },
  });
};

export const downloadLsgdSpotSaleReports = (build) => {
  return build.query({
    query: ({ fromDate, toDate, status, zoneId, lsgdId }) => {
      let subUrl = "";
      if (fromDate && toDate) {
        subUrl = `&after=${fromDate || ""}&before=${toDate || ""}`;
      } else if (fromDate) {
        subUrl = `&after=${fromDate || ""}`;
      } else if (toDate) {
        subUrl = `&before=${toDate || ""}`;
      }

      const url = `reports/spot_reports/?&zone=${zoneId}&lsgd=${lsgdId}&status=${status}${subUrl}`;
      return url;
    },
  });
};

export const fetchZoneSaleRepots = (build) => {
  return build.query({
    query: ({ fromDate, toDate, status, zoneId }) => {
      let subUrl = "";
      if (fromDate && toDate) {
        subUrl = `&after=${fromDate || ""}&before=${toDate || ""}`;
      } else if (fromDate) {
        subUrl = `&after=${fromDate || ""}`;
      } else if (toDate) {
        subUrl = `&before=${toDate || ""}`;
      }
      const url = `reports/normal_list/?zoneId=${zoneId}&status=${status}${subUrl}`;
      return url;
    },
  });
};

export const fetchZoneSpotSaleReports = (build) => {
  return build.query({
    query: ({ fromDate, toDate, status, zoneId, lsgdId }) => {
      let subUrl = "";
      if (fromDate && toDate) {
        subUrl = `&after=${fromDate || ""}&before=${toDate || ""}`;
      } else if (fromDate) {
        subUrl = `&after=${fromDate || ""}`;
      } else if (toDate) {
        subUrl = `&before=${toDate || ""}`;
      }

      const url = `reports/spot_list/?&zoneId=${zoneId}&status=${status}${subUrl}`;
      return url;
    },
  });
};

export const downloadZoneSaleReports = (build) => {
  return build.query({
    query: ({ fromDate, toDate, status, zoneId }) => {
      let subUrl = "";
      if (fromDate && toDate) {
        subUrl = `&after=${fromDate || ""}&before=${toDate || ""}`;
      } else if (fromDate) {
        subUrl = `&after=${fromDate || ""}`;
      } else if (toDate) {
        subUrl = `&before=${toDate || ""}`;
      }
      const url = `reports/zone_normal_reports/?zoneId=${zoneId}&status=${status}${subUrl}`;
      return url;
    },
  });
};

export const downloadZoneSpotSaleReports = (build) => {
  return build.query({
    query: ({ fromDate, toDate, status, zoneId }) => {
      let subUrl = "";
      if (fromDate && toDate) {
        subUrl = `&after=${fromDate || ""}&before=${toDate || ""}`;
      } else if (fromDate) {
        subUrl = `&after=${fromDate || ""}`;
      } else if (toDate) {
        subUrl = `&before=${toDate || ""}`;
      }

      const url = `reports/zone_spot_reports/?&zoneId=${zoneId}&status=${status}${subUrl}`;
      return url;
    },
  });
};
