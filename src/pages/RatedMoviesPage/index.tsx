import React, { useEffect, useState } from 'react';
import { addRating, deleteRating, viewRatedMovies } from '../../api';
import MovieDetails from '../../components/MovieDetails';
import { getWatchedMoviesFromLocalStorage, setWatchedMoviesToLocalStorage } from '../../utils/store/localStorageUtils';
import styles from './index.module.scss';

const RatedMoviesPage: React.FC = () => {
  const [ratedMovies, setRatedMovies] = useState<any[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<any | null>(null);
  const [rating, setRating] = useState<number | null>(null);

  useEffect(() => {
    const fetchRatedMovies = async () => {
      try {
        const response = await viewRatedMovies();
        setRatedMovies(response.data.results);
        setWatchedMoviesToLocalStorage(response.data.results); 
      } catch (error) {
        console.error('Error fetching rated movies:', error);
        setRatedMovies(getWatchedMoviesFromLocalStorage());
      }
    };

    fetchRatedMovies();
  }, []);

  const handleEditRating = async (movieId: number, newRating: number) => {
    try {
      await addRating(movieId, newRating);
      alert('Rating updated successfully!');
    } catch (error) {
      console.error('Error updating rating:', error);
    }
  };

  const handleDeleteRating = async (movieId: number) => {
    try {
      await deleteRating(movieId);
      alert('Rating deleted successfully!');
      setRatedMovies(ratedMovies.filter(movie => movie.id !== movieId));
    } catch (error) {
      console.error('Error deleting rating:', error);
    }
  };

  const handleSelectMovie = (movie: any) => {
    setSelectedMovie(movie);
    setRating(movie.rating || 0);
  };

  return (
    <div className={styles['rated-movies-page']}>
      <h2 className={styles['page-title']}>Rated Movies</h2>
      {selectedMovie && (
        <div className={styles['selected-movie']}>
          <MovieDetails movie={selectedMovie} />
          <div className={styles['rating-controls']}>
            <label>Edit Rating:</label>
            <input
              type="number"
              min="1"
              max="10"
              value={rating || ''}
              onChange={(e) => setRating(parseInt(e.target.value))}
            />
            <button onClick={() => handleEditRating(selectedMovie.id, rating!)}>Update Rating</button>
            <button onClick={() => handleDeleteRating(selectedMovie.id)}>Delete Rating</button>
          </div>
        </div>
      )}
      <ul className={styles['movie-list']}>
        {ratedMovies.map((movie) => (
          <li
            key={movie.id}
            className={styles['movie-item']}
            onClick={() => handleSelectMovie(movie)}
          >
            <h3 className={styles['movie-title']}>{movie.title}</h3>
            <p className={styles['movie-rating']}>Rating: {movie.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RatedMoviesPage;
