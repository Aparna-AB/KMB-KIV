import { pagination } from "../../../../utils/constants";

export const vehiclePassDetails = (build) => {
  return build.query({
    query: ({ searchParams, page, userId }) => {
      console.log("userId", userId);
      const url = searchParams
        ? `list/vehiclePassDetail/?limit=${pagination.limit}&page=${
            page || 1
          }&search=${searchParams || ""}&zo_id=${userId}`
        : `list/vehiclePassDetail/?limit=${pagination.limit}&page=${
            page || 1
          }&zo_id=${userId}`;

      return url;
    },
  });
};
