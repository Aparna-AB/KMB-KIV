import { customerServiceAPI } from "../../../customerServiceApi";
import { addUser, fetchZoneUser,fetchLsgdUser, updateUser,deleteUser,changeCustomerNo } from "./user";

export const userApi = customerServiceAPI.injectEndpoints({
  endpoints: (build) => ({
    addUser: addUser(build),
    fetchZoneUser:fetchZoneUser(build),
    fetchLsgdUser:fetchLsgdUser(build),
    updateUser: updateUser(build),
    deleteUser:deleteUser(build),
    changeCustomerNo:changeCustomerNo(build)
  }),
  overrideExisting: false,
});

export const {
  useAddUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useLazyFetchLsgdUserQuery,
  useLazyFetchZoneUserQuery,
  useChangeCustomerNoMutation
} = userApi;
