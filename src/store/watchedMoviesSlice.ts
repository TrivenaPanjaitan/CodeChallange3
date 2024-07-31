// src/store/watchedMoviesSlice.ts
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchMovies as apiFetchMovies } from '../api/movies';
import { WatchedMovie } from '../types/WatchedMovie';

interface WatchedMoviesState {
  movies: WatchedMovie[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: WatchedMoviesState = {
  movies: [],
  status: 'idle',
  error: null,
};

// Ensure only one export of fetchMoviesThunk
export const fetchMoviesThunk = createAsyncThunk(
  'watchedMovies/fetchMovies',
  async (query: string) => {
    const movies = await apiFetchMovies(query);
    return movies;
  }
);

const watchedMoviesSlice = createSlice({
  name: 'watchedMovies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMoviesThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMoviesThunk.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movies = action.payload;
      })
      .addCase(fetchMoviesThunk.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch movies';
      });
  },
});

export default watchedMoviesSlice.reducer;
