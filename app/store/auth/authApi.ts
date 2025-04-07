import type { LoginBody, LoginVariables } from "./authTypes";
import { createApi } from "@reduxjs/toolkit/query/react";
import { useBaseQueryWithAuth } from "../hooks";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: useBaseQueryWithAuth(),
  endpoints: (builder) => ({
    login: builder.mutation<LoginBody, LoginVariables>({
      query: (credentials) => ({
        url: "/auth/admin-login",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
