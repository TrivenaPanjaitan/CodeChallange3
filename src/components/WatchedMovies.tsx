// src/components/WatchedMovies.tsx
import React from 'react';
import { WatchedMovie } from '../types/WatchedMovie';

interface WatchedMoviesProps {
  watchedMovies: WatchedMovie[];
}

const WatchedMovies: React.FC<WatchedMoviesProps> = ({ watchedMovies }) => {
  return (
    <ul>
      {watchedMovies.map(movie => (
        <li key={movie.id}>
          <h3>{movie.title} ({movie.release_date.split('-')[0]})</h3>
          <img src={movie.poster_path} alt={movie.title} />
        </li>
      ))}
    </ul>
  );
};

export default WatchedMovies;
