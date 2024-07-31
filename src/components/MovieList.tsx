// src/components/MovieList.tsx
import React from 'react';
import { WatchedMovie } from '../store/watchedMoviesSlice';

interface MovieListProps {
  movies: WatchedMovie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <div>
      {movies.map(movie => (
        <div key={movie.id}>
          <img src={movie.thumbnail} alt={movie.title} />
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
