import { vehiclePassDetails } from "./vechiclePass";
import { bookingServiceAPI } from "../../../bookingServiceAPI";

export const vechiclepassApi = bookingServiceAPI.injectEndpoints({
  endpoints: (build) => ({
    vehiclePassDetails: vehiclePassDetails(build),
  }),
  overrideExisting: false,
});

export const { useLazyVehiclePassDetailsQuery } = vechiclepassApi;
