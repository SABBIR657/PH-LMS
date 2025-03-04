import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: null, // Initial state for user info
};

const userSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload; // Save user info
      console.log(action.payload, "action in userslice 5555555555555555")
    },
    clearUserInfo: (state) => {
      state.userInfo = null; // Clear user info on logout
    },
  },
});

export const { setUserInfo, clearUserInfo } = userSlice.actions;
export default userSlice.reducer;
