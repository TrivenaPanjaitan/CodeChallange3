import React from 'react';
import styles from './index.module.scss';

interface Movie {
  title: string;
  overview: string;
  // Add other relevant fields as needed
}

interface MovieDetailsProps {
  movie: Movie;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ movie }) => {
  return (
    <div className={styles['movie-details']}>
      <h3 className={styles['movie-title']}>{movie.title}</h3>
      <p className={styles['movie-overview']}>{movie.overview}</p>
      {/* Display other movie details as needed */}
    </div>
  );
};

export default MovieDetails;
