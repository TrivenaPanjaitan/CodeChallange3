import React from 'react';
import styles from './index.module.scss';

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
}

interface WatchlistProps {
  movies: Movie[];
}

const Watchlist: React.FC<WatchlistProps> = ({ movies }) => {
  return (
    <div className={styles['watchlist-container']}>
      {movies.length > 0 ? (
        <ul className={styles['movie-list']}>
          {movies.map((movie) => (
            <li key={movie.id} className={styles['movie-item']}>
              <img
                className={styles['movie-poster']}
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <div className={styles['movie-info']}>
                <h3 className={styles['movie-title']}>{movie.title}</h3>
                <p className={styles['movie-overview']}>{movie.overview}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles['empty-message']}>Your watchlist is empty</p>
      )}
    </div>
  );
};

export default Watchlist;
