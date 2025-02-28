// src/features/playlistSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const playlistSlice = createSlice({
  name: "playlist",
  initialState: [],
  reducers: {
    addPlaylist: (state, action) => {
      // Use action.payload instead of just payload
      return [...action.payload];
    },
  },
});

export const { addPlaylist } = playlistSlice.actions;

export default playlistSlice.reducer;
