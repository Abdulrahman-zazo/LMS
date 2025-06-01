import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { decryptToken } from "../../../Cookies/CryptoServices/crypto";
import {
  CHANGE_PASSWORD,
  LOGIN,
  NEW_PASSWORD,
  REGISTER,
  SEND_CODE,
  USER_INFO,
} from "../../../api/api";

interface Iuserdata {
  email: string;
  password: string;
}

interface IRegisterData {
  name: string;
  phone?: string;
  email: string;
  password: string;
}

interface IUserVerifyEmail {
  code: string;
  email: string;
  password: string;
  newpassword?: string;
}
interface IUserImage {
  image: File;
  token: string;
}
export const userApi = createApi({
  reducerPath: "auth",
  tagTypes: ["auth"],
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  endpoints: (builder) => ({
    getuserInformation: builder.query({
      query: (token: string) => ({
        url: USER_INFO,
        headers: {
          Authorization: `Bearer ${decryptToken(token)}`,
        },
      }),
      providesTags: ["auth"],
    }),
    login: builder.mutation({
      query: ({ email, password }: Iuserdata) => ({
        url: LOGIN,
        method: "POST",
        body: { email, password },
      }),
      invalidatesTags: ["auth"],
    }),
    register: builder.mutation({
      query: ({ email, password, name, phone }: IRegisterData) => ({
        url: REGISTER,
        method: "POST",
        body: { email, password, name, phone },
      }),
      invalidatesTags: ["auth"],
    }),
    registerByGoogle: builder.mutation({
      query: ({ email, name, phone }: IRegisterData) => ({
        url: REGISTER,
        method: "POST",
        body: { email, name, phone },
      }),
      invalidatesTags: ["auth"],
    }),
    VerifyEmail: builder.mutation({
      query: ({ email, password, code }: IUserVerifyEmail) => ({
        url: REGISTER,
        method: "POST",
        body: { email, code, password },
      }),
      invalidatesTags: ["auth"],
    }),
    forgetPassword: builder.mutation({
      query: ({ email }: IUserVerifyEmail) => ({
        url: SEND_CODE,
        method: "POST",
        body: { email },
      }),
      invalidatesTags: ["auth"],
    }),
    changePassword: builder.mutation({
      query: ({ email, password, code }: IUserVerifyEmail) => ({
        url: NEW_PASSWORD,
        method: "POST",
        body: { email, password, code },
      }),
      invalidatesTags: ["auth"],
    }),
    changeMypassword: builder.mutation({
      query: ({ email, password, newpassword }: IUserVerifyEmail) => ({
        url: CHANGE_PASSWORD,
        method: "POST",
        body: { email, password, newpassword },
      }),
      invalidatesTags: ["auth"],
    }),
    ChanfeImage: builder.mutation({
      query: ({ image, token }: IUserImage) => ({
        url: CHANGE_PASSWORD,
        method: "POST",
        body: { image },
        headers: {
          Authorization: `Bearer ${decryptToken(token)}`,
        },
      }),
      invalidatesTags: ["auth"],
    }),
  }),
});

export const {
  useLoginMutation,
  useGetuserInformationQuery,
  useChanfeImageMutation,
  useChangeMypasswordMutation, // change old password
  useChangePasswordMutation, // forget password
  useForgetPasswordMutation, // send code
  useRegisterByGoogleMutation,
  useRegisterMutation,
  useVerifyEmailMutation,
} = userApi;
