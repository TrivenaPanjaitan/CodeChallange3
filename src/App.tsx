// src/App.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieList from './components/MovieList';
import { AppDispatch, RootState } from './store';
import { fetchMovies } from './store/watchedMoviesSlice';

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchMovies('Batman'));
  }, [dispatch]);

  const watchedMovies = useSelector((state: RootState) => state.watchedMovies.movies);

  return (
    <div>
      <h1>Movie Database</h1>
      <MovieList movies={watchedMovies} />
    </div>
  );
};

export default App;
