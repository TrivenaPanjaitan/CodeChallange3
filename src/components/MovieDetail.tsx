import React, { useEffect, useState } from 'react';
import { addWatchedMovie } from '../hooks/useOfflineStorage';
import { fetchMovieDetails } from '../utils/api';

interface MovieDetailProps {
  movieId: number;
}

const MovieDetail: React.FC<MovieDetailProps> = ({ movieId }) => {
  const [movie, setMovie] = useState<any | null>(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      const details = await fetchMovieDetails(movieId);
      setMovie(details);
    };
    getMovieDetails();
  }, [movieId]);

  const handleMarkWatched = () => {
    if (movie) {
      addWatchedMovie(movie);
    }
  };

  return (
    <div>
      {movie && (
        <div>
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <button onClick={handleMarkWatched}>Mark as Watched</button>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
