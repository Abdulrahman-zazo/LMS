import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GET_ALL_COURSES, GET_COURSE_BY_ID } from "../../../api/api";

interface ICoursesdata {
  course_id: number;
}
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
    getCourseById: builder.mutation({
      query: ({ course_id }: ICoursesdata) => ({
        url: GET_COURSE_BY_ID,
        method: "POST",
        body: { course_id },
      }),
      invalidatesTags: ["Courses"],
    }),
  }),
});

export const { useGetCourseByIdMutation, useGetAllCoursesQuery } = CoursesApi;
