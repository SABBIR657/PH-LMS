/* eslint-disable no-unused-vars */
import { axiosBaseQuery } from "@/helpers/axios/axiosBaseQuery";
import { getBaseUrl } from "@/helpers/congig/envConfig";
import { createApi } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({
    baseUrl: getBaseUrl() || "http://localhost:5000/api/v1",
  }),
  endpoints: (builder) => ({}),
  tagTypes: ["Task", "User"],
});