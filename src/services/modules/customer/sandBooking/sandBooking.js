import { pagination } from "../../../../utils/constants";

export const sandBook = (build) =>
  build.mutation({
    query: (data) => ({
      url: `sandBooking/sandRegistration`,
      method: "post",
      body: data,
    }),
  });

export const fetchSandBooking = (build) => {
  return build.query({
    query: ({ searchParams, page }) => {
      const url = "sandBooking  ";

      return url;
    },
  });
};
export const fetchCustomerSandBooking = (build) => {
  return build.query({
    query: ({ searchParams, page, userId }) => {
      const url = searchParams
        ? `sandBooking/?limit=${pagination.limit}&page=${page || 1}&search=${
            searchParams || ""
          }&userId=${userId}`
        : `sandBooking/?limit=${pagination.limit}&page=${
            page || 1
          }&userId=${userId}`;

      return url;
    },
  });
};

export const fetchPCSandBooking = (build) => {
  return build.query({
    query: ({ searchParams, page, portId }) => {
      const url = searchParams
        ? `sandBooking/?limit=${pagination.limit}&page=${page || 1}&search=${
            searchParams || ""
          }&userId=${portId}&status=pending,approve`
        : `sandBooking/?limit=${pagination.limit}&page=${
            page || 1
          }&userId=${portId}&status=pending,approve`;

      return url;
    },
  });
};

export const fetchZonePCSandBooking = (build) => {
  return build.query({
    query: ({ searchParams, page, zoneId }) => {
      const url = searchParams
        ? `sandBooking/?limit=${pagination.limit}&page=${page || 1}&search=${
            searchParams || ""
          }&zoneId=${zoneId}&status=sandissued,approve`
        : `sandBooking/?limit=${pagination.limit}&page=${
            page || 1
          }&zoneId=${zoneId}&status=sandissued,approve`;

      return url;
    },
  });
};

export const updateSandRegistration = (build) =>
  build.mutation({
    query: ({ data, id }) => ({
      url: `approval/pc/${id}`,
      method: "put",
      body: data,
    }),
  });

export const updateZoneOperator = (build) =>
  build.mutation({
    query: ({ data, id }) => ({
      url: `approval/zo`,
      method: "post",
      body: data,
    }),
  });

export const FetchSandPass = (build) => {
  return build.query({
    query: ({ id }) => {
      const url = `sandBooking/vehiclepass/${id}`;
      return url;
    },
  });
};

// export const fetchPCSandBookingHistory = (build) => {
//   return build.query({
//     query: ({ searchParams, page, portId, zoneId, month, year }) => {
//       const url = searchParams
//         ? `sandBooking/?limit=${pagination.limit}&page=${page || 1}&search=${
//             searchParams || ""
//           }&portId=${portId}&zoneId=${zoneId}&month=${month}&year=${year}`
//         : `sandBooking/?limit=${pagination.limit}&page=${
//             page || 1
//           }&portId=${portId}&zoneId=${zoneId}&month=${month}&year=${year}`;

//       return url;
//     },
//   });
// };

export const fetchPCSandBookingHistory = (build) => {
  return build.query({
    query: ({ searchParams, page, portId, zoneId, month, year }) => {
      let subUrl = "";
      if (month && year) {
        subUrl = `&month=${month || ""}&year=${year || ""}`;
      } else if (month) {
        subUrl = `&month=${month || ""}`;
      } else if (year) {
        subUrl = `&before=${year || ""}`;
      }

      const url = searchParams
        ? `sandBooking/pcbookinghistory/?limit=${pagination.limit}&page=${
            page || 1
          }&search=${searchParams || ""}&userId=${portId}${subUrl}`
        : `sandBooking/pcbookinghistory/?limit=${pagination.limit}&page=${
            page || 1
          }&userId=${portId}${subUrl}`;
      return url;
    },
  });
};

export const fetchSandBookingHistory = (build) => {
  return build.query({
    query: ({ searchParams, page, userId }) => {
      const url = searchParams
        ? `sandBooking/bookinghistory/${userId}/?limit=${
            pagination.limit
          }&page=${page || 1}&search=${searchParams || ""}`
        : `sandBooking/bookinghistory/${userId}/?limit=${
            pagination.limit
          }&page=${page || 1}`;

      return url;
    },
  });
};
