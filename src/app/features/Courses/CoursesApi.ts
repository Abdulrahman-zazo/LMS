import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  DELETE_COMMINTS,
  GET_ALL_COURSES,
  GET_COURSE_BY_ID,
} from "../../../api/api";
import type { IDeleteComment } from "../Comments/CommentsApi";
import { decryptToken } from "../../../Cookies/CryptoServices/crypto";

export const CoursesApi = createApi({
  reducerPath: "CoursesApi",
  tagTypes: ["Courses"],
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  endpoints: (builder) => ({
    getAllCourses: builder.query({
      query: () => ({
        url: GET_ALL_COURSES,
      }),
      providesTags: ["Courses"],
    }),
    getCourseById: builder.query({
      query: (course_id: number) => ({
        url: GET_COURSE_BY_ID,
        method: "POST",
        body: { course_id },
      }),
      providesTags: ["Courses"],
    }),
    deleteComments: builder.mutation({
      query: ({ comment_id, token }: IDeleteComment) => ({
        url: DELETE_COMMINTS,
        method: "POST",
        body: { comment_id },
        headers: {
          Authorization: `Bearer ${decryptToken(token)}`,
        },
      }),
      invalidatesTags: ["Courses"],
    }),
  }),
});

export const {
  useGetCourseByIdQuery,
  useGetAllCoursesQuery,
  useDeleteCommentsMutation,
} = CoursesApi;
