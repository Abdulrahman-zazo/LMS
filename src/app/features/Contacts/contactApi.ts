// apiSlice.ts أو contactApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { GET_CONTACTS } from "../../../api/api";
import type { Contact } from "../../../types";

export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  endpoints: (builder) => ({
    getContact: builder.query<{ Contact: Contact[] }, void>({
      query: () => ({
        url: GET_CONTACTS,
      }),
    }),
  }),
});

export const { useGetContactQuery } = contactApi;
