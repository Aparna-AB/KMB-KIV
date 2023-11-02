import { pagination } from "../../../../utils/constants";

export const assignLorry = (build) =>
  build.mutation({
    query: (data) => ({
      url: `lorry/assign`,
      method: "post",
      body: data,
    }),
  });

export const vehiclePassDetails = (build) => {
  return build.query({
    query: ({ searchParams, page, zone, userId }) => {
      console.log("userId", userId);
      const url = searchParams
        ? `list/vehiclePassDetail/?limit=${pagination.limit}&page=${
            page || 1
          }&search=${searchParams || ""}&userId=${userId}&zoneId=${zone || ""}`
        : `list/vehiclePassDetail/?limit=${pagination.limit}&page=${
            page || 1
          }&userId=${userId}&zoneId=${zone || ""}`;

      return url;
    },
  });
};
