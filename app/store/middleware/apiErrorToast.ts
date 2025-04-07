import { isRejectedWithValue } from "@reduxjs/toolkit";
import { type Middleware } from "@reduxjs/toolkit";
import { message as showMessage } from "antd";

const DEFAULT_MESSAGE = "Oops! Something went wrong, please try again";

export const apiErrorToast: Middleware = () => (next) => (action: any) => {
  if (isRejectedWithValue(action)) {
    const message = action?.payload?.data?.message || DEFAULT_MESSAGE;
    showMessage.error(message);
  }

  return next(action);
};
