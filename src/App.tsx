// src/App.tsx
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axiosInstance from './api/axiosInstance';
import useOnlineStatus from './hooks/useOnlineStatus';
import { AppDispatch, RootState } from './store';
import { clearOfflineChanges, setWatchedMovies } from './store/watchedMoviesSlice';
import { getWatchedMovies, saveWatchedMovies } from './utils/offlineStorage';

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isOnline = useOnlineStatus();
  const watchedMovies = useSelector((state: RootState) => state.watchedMovies.movies);
  const offlineChanges = useSelector((state: RootState) => state.watchedMovies.offlineChanges);

  useEffect(() => {
    const loadWatchedMovies = async () => {
      const movies = await getWatchedMovies();
      dispatch(setWatchedMovies(movies));
    };

    loadWatchedMovies();
  }, [dispatch]);

  useEffect(() => {
    saveWatchedMovies(watchedMovies);
  }, [watchedMovies]);

  useEffect(() => {
    if (isOnline) {
      // Sync offline changes with server
      offlineChanges.forEach(change => {
        const body = {
          media_type: 'movie',
          media_id: change.id,
          watchlist: change.action === 'add',
        };

        axiosInstance.post(`/account/{account_id}/watchlist`, body);
      });

      dispatch(clearOfflineChanges());
    }
  }, [isOnline, offlineChanges, dispatch]);

  return (
    <div>
      <h1>Movie Database</h1>
      {/* Add routes and components here */}
    </div>
  );
};

export default App;
