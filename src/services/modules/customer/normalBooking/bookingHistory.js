import { pagination } from "../../../../utils/constants";

export const fetchBookingHistory = (build) => {
    return build.query({
      query: ({ searchParams, page }) => {
        const url = searchParams
        //? `sandBooking/?status=Active&limit=${pagination.limit}&page=${
          ? `sandBooking/bookinghistory/?status=Active&limit=${pagination.limit}&page=${
              page || 1
            }&search=${searchParams || ""}`
        //: `sandBooking/?status=Active&limit=${pagination.limit}&page=${
          : `sandBooking/bookinghistory/?status=Active&limit=${pagination.limit}&page=${
              page || 1
            }`;
  
        return url;
      },
    });
  };
  