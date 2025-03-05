// src/redux/courseSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  courseId: null,
};

const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    setCourseId: (state, action) => {
      state.courseId = action.payload;
    },
    clearCourseId: (state) => {
      state.courseId = null;
    },
  },
});

export const { setCourseId, clearCourseId } = courseSlice.actions;
export default courseSlice.reducer;
