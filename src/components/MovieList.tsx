// src/components/MovieList.tsx
import { useEffect, useState } from 'react';
import axiosInstance from '../api/axiosInstance';

const MovieList = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [query, setQuery] = useState('Batman');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axiosInstance.get(`/search/movie?query=${query}`);
        setMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovies();
  }, [query]);

  return (
    <div>
      <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search movies" />
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <h3>{movie.title} ({movie.release_date.split('-')[0]})</h3>
            <button>Add to Watched</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
