import { apiSlice } from './apiSlice'

export const departmentApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    studentFee: builder.mutation({
      query: (data) => ({
        url: '/api/dept/studentFee',
        method: 'POST',
        body: data,
      }),
    }),
    repairs: builder.mutation({
      query: (data) => ({
        url: '/api/dept/adminMsg',
        method: 'POST',
        body: data,
      }),
    }),
    messages: builder.mutation({
      query: () => ({
        url: '/api/dept/adminMsg',
      }),
    }),
  }),
})

export const {
  useStudentFeeMutation,
  useRepairsMutation,
  useMessagesMutation,
} = departmentApiSlice
