// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import playlistReducer from "./playlistSlice"; // Correct the import

export const newStore = configureStore({
  reducer: {
    playlist: playlistReducer, // Use the reducer from playlistSlice
  },
});
