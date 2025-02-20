import { baseApi } from "./baseApi";

const taskApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createTask: build.mutation({
      query: (payload) => ({
        url: "/tasks",
        method: "POST",
        data: payload,
      }),
      invalidatesTags: ["Task"],
    }),
    handleDeleteTask: build.mutation({
      query: (payload) => ({
        url: `/tasks/${payload}`,
        method: "DELETE",
        data: payload,
      }),
      invalidatesTags: ["Task"],
    }),
    getTasks: build.query({
      query: () => ({
        url: "/tasks/user",
        method: "GET",
      }),
      providesTags: ["Task"],
    }),
    getSingleTask: build.query({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: "GET",
      }),
      providesTags: ["Task"],
    }),
    updateTask: build.mutation({
      query: (payload) => ({
        url: `/tasks/${payload.id}`,
        method: "PATCH",
        data: payload.data,
      }),
      invalidatesTags: ["Task"],
    }),
  }),
});

export const {
  useCreateTaskMutation,
  useGetTasksQuery,
  useUpdateTaskMutation,
  useGetSingleTaskQuery,
  useHandleDeleteTaskMutation,
} = taskApi;