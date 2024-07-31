// src/components/MovieList.tsx
import React from 'react';
import { WatchedMovie } from '../types/WatchedMovie';

interface MovieListProps {
  movies: WatchedMovie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <h3>{movie.title} ({movie.release_date.split('-')[0]})</h3>
          <img src={movie.poster_path} alt={movie.title} />
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
