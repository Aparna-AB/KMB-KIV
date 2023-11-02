import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { customerServiceAPI } from "../services/customerServiceApi";
import { masterServiceAPI } from "../services/masterServiceAPI";
import { bookingServiceAPI } from "../services/bookingServiceAPI";
import { notificationServiceAPI } from "../services/notificationServiceAPI";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./reducers";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) => {
    let middleware = getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat([
      customerServiceAPI.middleware,
      masterServiceAPI.middleware,
      bookingServiceAPI.middleware,
      notificationServiceAPI.middleware,
    ]);

    if (process.env.NODE_ENV === "development") {
      middleware = middleware.concat(logger);
    }
    return middleware;
  },
});
export const persistor = persistStore(store);
