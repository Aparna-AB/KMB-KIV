import { combineReducers } from "redux";
import { customerServiceAPI } from "../services/customerServiceApi";
import { masterServiceAPI } from "../services/masterServiceAPI";
import { bookingServiceAPI } from "../services/bookingServiceAPI";
import loadingSlice from "../services/loadingSlice";
import authSlice from "../services/modules/auth/authSlice";
import * as modules from "../services/modules";
import { notificationServiceAPI } from "../services/notificationServiceAPI";
const rootReducer = combineReducers({
  [customerServiceAPI.reducerPath]: customerServiceAPI.reducer,
  [masterServiceAPI.reducerPath]: masterServiceAPI.reducer,
  [bookingServiceAPI.reducerPath]: bookingServiceAPI.reducer,
  [notificationServiceAPI.reducerPath]: notificationServiceAPI.reducer,
  loadingSlice: loadingSlice,
  authSlice: authSlice,
  ...Object.values(modules).reduce(
    (acc, module) => ({
      ...acc,
      [module.reducerPath]: module.reducer,
    }),
    {}
  ),
});

export default rootReducer;
