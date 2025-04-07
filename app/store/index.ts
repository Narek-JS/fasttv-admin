import { apiErrorToast } from "./middleware/apiErrorToast";
import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./auth/authApi";
import modalReducer from "./modal/modalSlice";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, apiErrorToast),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
