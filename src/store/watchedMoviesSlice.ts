// src/store/watchedMoviesSlice.ts
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

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

// Async thunk for fetching movies
export const fetchMovies = createAsyncThunk(
  'watchedMovies/fetchMovies',
  async (query: string) => {
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}`, {
      headers: {
        Authorization: 'Bearer cyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjI0NTQ2MGVmOGZhN2NkODczMTkzYjkyNTc1MjUxNSIsIm5iZiI6MTcyMjQ0NjgzNC45MTU4NTMsInN1YiI6IjY2YWE0YmU3ZjNiYzJlNDg3Yjg3ZmZiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IgSl8NfOV3HdkmZTVUi23ByldLv67DXypaLJw8x5cKs'
      }
    });
    return response.data.results;
  }
);

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
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
  }
});

export const { addWatchedMovie, removeWatchedMovie, setWatchedMovies, clearOfflineChanges } = watchedMoviesSlice.actions;
export default watchedMoviesSlice.reducer;
