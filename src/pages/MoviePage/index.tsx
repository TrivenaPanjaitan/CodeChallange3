import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../../api';
import MovieDetails from '../../components/MovieDetails';
import styles from './index.module.scss';

const MoviePage: React.FC = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const [movie, setMovie] = useState<any>(null);

  useEffect(() => {
    if (movieId) {
      const fetchMovieDetails = async () => {
        try {
          const response = await getMovieDetails(parseInt(movieId));
          setMovie(response.data);
        } catch (error) {
          console.error('Error fetching movie details:', error);
        }
      };

      fetchMovieDetails();
    }
  }, [movieId]);

  return (
    <div className={styles['movie-page']}>
      <h2 className={styles['page-title']}>Movie Details</h2>
      {movie ? (
        <div className={styles['movie-content']}>
          <img
            className={styles['movie-poster']}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <MovieDetails movie={movie} />
        </div>
      ) : (
        <p className={styles['loading']}>Loading movie details...</p>
      )}
    </div>
  );
};

export default MoviePage;
