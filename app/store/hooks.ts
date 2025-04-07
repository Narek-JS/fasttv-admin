import { type BaseQueryFn } from "@reduxjs/toolkit/query";
import { type TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "./index";
import { useDispatch, useSelector } from "react-redux";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { BASE_URL } from "~/constants/urls";
import Cookies from "js-cookie";

export const useBaseQueryWithAuth = (): BaseQueryFn => {
  return fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      const token = Cookies.get("token");

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  });
};

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
