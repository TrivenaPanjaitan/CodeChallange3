// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import watchedMoviesReducer from './watchedMoviesSlice';

const store = configureStore({
  reducer: {
    watchedMovies: watchedMoviesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
