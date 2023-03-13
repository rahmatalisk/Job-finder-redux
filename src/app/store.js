import { configureStore } from '@reduxjs/toolkit';
import JobsSlice from '../features/jobs/JobsSlice';

export const store = configureStore({
  reducer: {
    jobs : JobsSlice,
  },
});
