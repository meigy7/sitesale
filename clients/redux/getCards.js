import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const getCards = createApi({
  reducerPath: 'getCards',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000/api/'}),
  endpoints: (build) => ({
    getGoods: build.query({
      query: () => `getcards`,
    })
  })
});

export const {useGetGoodsQuery} = getCards;
