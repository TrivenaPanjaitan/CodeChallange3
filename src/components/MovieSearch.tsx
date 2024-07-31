// src/components/MovieSearch.tsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { fetchMoviesThunk } from '../store/watchedMoviesSlice';
import { WatchedMovie } from '../types/WatchedMovie';
import MovieList from './MovieList';

const MovieSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const movies = useSelector((state: RootState) => state.watchedMovies.movies);
  const status = useSelector((state: RootState) => state.watchedMovies.status);
  const error = useSelector((state: RootState) => state.watchedMovies.error);

  const handleSearch = () => {
    dispatch(fetchMoviesThunk(query));
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for movies"
      />
      <button onClick={handleSearch}>Search</button>
      {status === 'loading' && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <MovieList movies={movies as WatchedMovie[]} /> {/* Ensure MovieList component expects the correct type */}
    </div>
  );
};

export default MovieSearch;
