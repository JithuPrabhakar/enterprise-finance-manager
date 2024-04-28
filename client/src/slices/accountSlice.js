import { apiSlice } from './apiSlice'

export const accountApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addTransactions: builder.mutation({
      query: (data) => ({
        url: '/api/accounts/transaction',
        method: 'POST',
        body: data,
      }),
    }),

    getTransactions: builder.query({
      query: () => ({
        url: '/api/accounts/transaction',
      }),
    }),
  }),
})

export const { useAddTransactionsMutation, useGetTransactionsQuery } =
  accountApiSlice
