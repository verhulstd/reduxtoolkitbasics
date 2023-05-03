import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const friendsApi = createApi({
  reducerPath: "friendsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/friends/" }),
  refetchOnReconnect: true,
  refetchOnFocus: true,
  endpoints: (builder) => ({
    getAllFriends: builder.query({
      query: () => ``,
      providesTags: (result) => ["Friends"],
    }),
    getOneFriend: builder.query({
      query: (id) => `${id}`,
    }),
    getManyFriends: builder.query({
      query: (arr) => "?" + arr.map((id) => `id=${id}`).join("&"),
    }),
    addFriend: builder.mutation({
      query: (body) => ({
        url: "",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Friends"],
    }),
  }),
});

export default friendsApi;
