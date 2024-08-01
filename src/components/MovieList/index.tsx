import React, { useState } from 'react';
import styles from './index.module.scss';

interface Movie {
  id: number;
  title: string;
  // Add other relevant fields as needed
}

interface MovieListProps {
  movies: Movie[];
  onMovieClick: (movieId: number) => void;
  onAddToWatchlist: (movieId: number) => void;
  onRemoveFromWatchlist: (movieId: number) => void;
  onRateMovie: (movieId: number, rating: number) => void;
}

const MovieList: React.FC<MovieListProps> = ({ movies, onMovieClick, onAddToWatchlist, onRemoveFromWatchlist, onRateMovie }) => {
  const [rating, setRating] = useState<number | null>(null);

  const handleRateChange = (movieId: number, rating: number) => {
    onRateMovie(movieId, rating);
  };

  return (
    <div className={styles['movie-list']}>
      {movies.length > 0 ? (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <span onClick={() => onMovieClick(movie.id)}>{movie.title}</span>
              <div className={styles['movie-actions']}>
                <button className={styles['add-to-watchlist']} onClick={() => onAddToWatchlist(movie.id)}>Add to Watchlist</button>
                <button className={styles['remove-from-watchlist']} onClick={() => onRemoveFromWatchlist(movie.id)}>Remove from Watchlist</button>
                <div className={styles['rating']}>
                  <label>Rate:</label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    onChange={(e) => handleRateChange(movie.id, parseInt(e.target.value))}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles['no-movies']}>No movies found</p>
      )}
    </div>
  );
};

export default MovieList;
