import { customerServiceAPI } from "../../../customerServiceApi";
import {
  addUserRegistration,
  fileUpload,
  updateUserRegistration,
  fetchUserRegistration,
} from "./customerRegistration";

export const UserRegistrationApi = customerServiceAPI.injectEndpoints({
  endpoints: (build) => ({
    addUserRegistration: addUserRegistration(build),
    fileUpload: fileUpload(build),
    updateUserRegistration: updateUserRegistration(build),
    fetchUserRegistration: fetchUserRegistration(build),
  }),
  overrideExisting: false,
});

export const {
  useAddUserRegistrationMutation,
  useFileUploadMutation,
  useUpdateUserRegistrationMutation,
  useLazyFetchUserRegistrationQuery,
} = UserRegistrationApi;
