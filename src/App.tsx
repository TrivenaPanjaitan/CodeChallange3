// src/App.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieList from './components/MovieList';
import { AppDispatch, RootState } from './store';
import { fetchMoviesThunk } from './store/watchedMoviesSlice';

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const movies = useSelector((state: RootState) => state.watchedMovies.movies);

  React.useEffect(() => {
    dispatch(fetchMoviesThunk('some query'));
  }, [dispatch]);

  return (
    <div>
      <h1>Movie List</h1>
      <MovieList movies={movies} /> {/* Ensure movies is passed as a prop */}
    </div>
  );
};

export default App;
