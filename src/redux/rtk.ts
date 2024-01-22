import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Post } from "./types";

export const myApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getPosts: builder.query<Post[],null>({query: () => "/posts",
  providesTags:["Post"]}),
    newPost: builder.mutation<Post,Post>({
       query:(post)=>({
        url: "posts",
        method:"POST",
        body:post
       }),
       invalidatesTags:["Post"]
    })
  }),
});

export const {useGetPostsQuery,useNewPostMutation} =  myApi;