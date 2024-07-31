// src/store/watchedMoviesSlice.ts
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchMovies } from '../api/movies';
import { fetchWatchlistMovies } from '../api/watchlist';
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

export const fetchMoviesThunk = createAsyncThunk(
  'watchedMovies/fetchMovies',
  async (query: string) => {
    const movies = await fetchMovies(query);
    return movies;
  }
);

export const fetchWatchlistThunk = createAsyncThunk(
  'watchedMovies/fetchWatchlist',
  async (accountId: number) => {
    const movies = await fetchWatchlistMovies(accountId);
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
      })
      .addCase(fetchWatchlistThunk.fulfilled, (state, action) => {
        state.movies = action.payload as WatchedMovie[];
      });
  },
});

export default watchedMoviesSlice.reducer;
