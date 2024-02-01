import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import * as API from "./externalApi";

const appApi = createApi({
  reducerPath: "appApi",

  baseQuery: fetchBaseQuery({ baseUrl: API.baseUrl }),

  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (trigger) => `/${API.allPostUrl}${trigger - trigger}`.slice(0, 6),

      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },

      merge: (currentCache, newItems) => {
        currentCache.results.push(...newItems.results);
      },

      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),

    getPostById: builder.query({
      query: (postId) => `/${API.allPostUrl}/${postId}`,
    }),
  }),
});

const { useGetPostsQuery, useGetPostByIdQuery } = appApi;

export { appApi, useGetPostsQuery, useGetPostByIdQuery };
