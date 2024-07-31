import React, { useEffect, useState } from 'react';
import { getWatchedMovies } from '../hooks/useOfflineStorage';

const WatchedList: React.FC = () => {
  const [watchedMovies, setWatchedMovies] = useState<any[]>([]);

  useEffect(() => {
    const fetchWatchedMovies = async () => {
      const movies = await getWatchedMovies();
      setWatchedMovies(movies);
    };
    fetchWatchedMovies();
  }, []);

  return (
    <div>
      <h2>Watched Movies</h2>
      <ul>
        {watchedMovies.map((movie) => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WatchedList;
