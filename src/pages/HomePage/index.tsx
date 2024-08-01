import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addRating, addToWatchlist, removeFromWatchlist, searchMovies } from '../../api';
import MovieList from '../../components/MovieList';
import styles from './index.module.scss';

const HomePage: React.FC = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      const response = await searchMovies(query);
      setMovies(response.data.results);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const handleMovieClick = (movieId: number) => {
    navigate(`/movie/${movieId}`);
  };

  const handleAddToWatchlist = async (movieId: number) => {
    try {
      await addToWatchlist(movieId);
      alert('Movie added to watchlist!');
    } catch (error) {
      console.error('Error adding movie to watchlist:', error);
    }
  };

  const handleRemoveFromWatchlist = async (movieId: number) => {
    try {
      await removeFromWatchlist(movieId);
      alert('Movie removed from watchlist!');
    } catch (error) {
      console.error('Error removing movie from watchlist:', error);
    }
  };

  const handleRateMovie = async (movieId: number, rating: number) => {
    try {
      await addRating(movieId, rating);
      alert('Movie rated successfully!');
    } catch (error) {
      console.error('Error rating movie:', error);
    }
  };

  return (
    <div className={styles['home-page']}>
      <h2>Home Page</h2>
      <div className={styles['search-bar']}>
        <input
          type="text"
          placeholder="Search for movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className={styles['movie-list-container']}>
        <MovieList
          movies={movies}
          onMovieClick={handleMovieClick}
          onAddToWatchlist={handleAddToWatchlist}
          onRemoveFromWatchlist={handleRemoveFromWatchlist}
          onRateMovie={handleRateMovie}
        />
      </div>
    </div>
  );
};

export default HomePage;
