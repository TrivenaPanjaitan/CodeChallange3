// src/store/watchedMoviesSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface WatchedMovie {
  id: number;
  title: string;
  year: string;
  thumbnail: string;
}

interface WatchedMoviesState {
  movies: WatchedMovie[];
  offlineChanges: { id: number; action: 'add' | 'remove' }[];
}

const initialState: WatchedMoviesState = {
  movies: [],
  offlineChanges: [],
};

const watchedMoviesSlice = createSlice({
  name: 'watchedMovies',
  initialState,
  reducers: {
    addWatchedMovie: (state, action: PayloadAction<WatchedMovie>) => {
      state.movies.push(action.payload);
      state.offlineChanges.push({ id: action.payload.id, action: 'add' });
    },
    removeWatchedMovie: (state, action: PayloadAction<number>) => {
      state.movies = state.movies.filter(movie => movie.id !== action.payload);
      state.offlineChanges.push({ id: action.payload, action: 'remove' });
    },
    setWatchedMovies: (state, action: PayloadAction<WatchedMovie[]>) => {
      state.movies = action.payload;
    },
    clearOfflineChanges: (state) => {
      state.offlineChanges = [];
    }
  },
});

export const { addWatchedMovie, removeWatchedMovie, setWatchedMovies, clearOfflineChanges } = watchedMoviesSlice.actions;
export default watchedMoviesSlice.reducer;
