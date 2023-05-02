import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const friendsApi = createApi({
  reducerPath: "friendsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/friends/" }),
  endpoints: (builder) => ({
    getAllFriends: builder.query({
      query: () => ``,
    }),
    getOneFriend: builder.query({
      query: (id) => id,
    }),
    getManyFriends: builder.query({
      query: (arr) => "?" + arr.map((id) => `id=${id}`).join("&"),
    }),
  }),
});

console.log(friendsApi);
export default friendsApi;
