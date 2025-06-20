import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ADD_COMMINTS } from "../../../api/api";
import { decryptToken } from "../../../Cookies/CryptoServices/crypto";

export interface ICommentsdata {
  course_id: number;
  comment_text: string;
  token: string;
  comment_id?: number;
}

export interface IDeleteComment {
  token: string;
  comment_id: number;
}
export const CommentsApi = createApi({
  reducerPath: "CommentsApi",
  tagTypes: ["Comments"],
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  endpoints: (builder) => ({
    addComments: builder.mutation({
      query: ({ course_id, comment_text, token }: ICommentsdata) => ({
        url: ADD_COMMINTS,
        method: "POST",
        body: { course_id, comment_text },
        headers: {
          Authorization: `Bearer ${decryptToken(token)}`,
        },
      }),
      invalidatesTags: ["Comments"],
    }),
  }),
});

export const { useAddCommentsMutation } = CommentsApi;
