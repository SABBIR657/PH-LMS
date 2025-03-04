import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorage by default
import userReducer from "./userSlice";
import playlistReducer from "./playlistSlice";
import courseReducer from "./courseSlice"

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['userInfo'], // Only persist userInfo
};

const persistedUserReducer = persistReducer(persistConfig, userReducer);

export const newStore = configureStore({
  reducer: {
    playlist: playlistReducer,
    userInfo: persistedUserReducer, // Using persisted reducer for userInfo
    course: courseReducer,
  },
});

export const persistor = persistStore(newStore);
