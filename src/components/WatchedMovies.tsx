// src/components/WatchedMovies.tsx
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const WatchedMovies = () => {
  const watchedMovies = useSelector((state: RootState) => state.watchedMovies.movies);

  return (
    <div>
      <h2>Watched Movies</h2>
      <ul>
        {watchedMovies.map(movie => (
          <li key={movie.id}>
            <h3>{movie.title} ({movie.year})</h3>
            <img src={movie.thumbnail} alt={movie.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WatchedMovies;
