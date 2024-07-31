import React, { useEffect, useState } from 'react';
import { addWatchedMovie } from '../hooks/useOfflineStorage';
import { fetchMovies } from '../utils/api';

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const getMovies = async () => {
      const results = await fetchMovies(query);
      setMovies(results);
    };
    if (query) getMovies();
  }, [query]);

  const handleMarkWatched = (movie: any) => {
    addWatchedMovie(movie);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <button onClick={() => handleMarkWatched(movie)}>Mark as Watched</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
