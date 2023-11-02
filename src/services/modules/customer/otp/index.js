import { notificationServiceAPI } from "../../../notificationServiceAPI";
import { sendOtp,verifyOtp } from "./otp";

export const OtpApi = notificationServiceAPI.injectEndpoints({
  endpoints: (build) => ({
    sendOtp:sendOtp(build),
    verifyOtp:verifyOtp(build)
  }),
  overrideExisting: false,
});

export const { useSendOtpMutation,useVerifyOtpMutation} = OtpApi;
