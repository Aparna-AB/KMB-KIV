import { pagination } from "../../../../utils/constants";

export const spotBook = (build) =>
  build.mutation({
    query: (data) => ({
      url: `spotBooking/spotRegistration`,
      method: "post",
      body: data,
    }),
  });

export const fetchSpotBooking = (build) => {
  return build.query({
    query: ({ searchParams, page, zone, status, portId }) => {
      const url = searchParams
        ? `spotBooking/getallBooking/?limit=${pagination.limit}&page=${
            page || 1
          }&search=${searchParams || ""}&zoneId=${zone || ""}&portId=${
            portId || ""
          }&status=${status || ""}`
        : `spotBooking/getallBooking/?limit=${pagination.limit}&page=${
            page || 1
          }&zoneId=${zone || ""}&portId=${portId || ""}&status=${status || ""}`;

      return url;
    },
  });
};

export const fetchSpotBookingZo = (build) => {
  return build.query({
    query: ({ searchParams, page, zoneId }) => {
      const url = searchParams
        ? `spotBooking/getallBooking/?limit=${pagination.limit}&page=${
            page || 1
          }&search=${searchParams || ""}&zoneId=${
            zoneId || ""
          }&status=approve,sandissued`
        : `spotBooking/getallBooking/?limit=${pagination.limit}&page=${
            page || 1
          }&zoneId=${zoneId || ""}&status=approve,sandissued`;

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

export const pcApproval = (build) =>
  build.mutation({
    query: ({ data, id }) => ({
      url: `spotBooking/pcApproval/${id}`,
      method: "put",
      body: data,
    }),
  });
export const zoApprovalPayment = (build) =>
  build.query({
    query: ({ data, id }) => ({
      url: `spotBooking/sandIssue/${id}`,
      body: data,
    }),
  });

export const zoApproval = (build) =>
  build.mutation({
    query: ({ data }) => ({
      url: `spotBooking/zoVerify`,
      method: "post",
      body: data,
    }),
  });
export const FetchSandPass = (build) => {
  return build.query({
    query: ({ id }) => {
      const url = `spotBooking/vehiclePass/${id}`;
      return url;
    },
  });
};

export const fetchSpotBookingByToken = (build) => {
  return build.query({
    query: ({ tokenId }) => {
      const url = `spotBooking/searchSpot/${tokenId}`;

      return url;
    },
  });
};
