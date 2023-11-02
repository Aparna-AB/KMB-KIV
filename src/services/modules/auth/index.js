import { customerServiceAPI } from "../../customerServiceApi";
import { login } from "./auth";

export const authApi = customerServiceAPI.injectEndpoints({
  endpoints: (build) => ({
    login: login(build),
  }),
  overrideExisting: false,
});

export const { useLoginMutation } = authApi;
