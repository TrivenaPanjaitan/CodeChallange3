import React, { useEffect, useState } from 'react';
import { viewWatchlistMovies } from '../../api';
import Watchlist from '../../components/Watchlist';
import styles from './index.module.scss';

const WatchlistPage: React.FC = () => {
  const [watchlistMovies, setWatchlistMovies] = useState<any[]>([]);

  useEffect(() => {
    const fetchWatchlistMovies = async () => {
      try {
        const response = await viewWatchlistMovies();
        setWatchlistMovies(response.data.results); // Adjust based on API response
      } catch (error) {
        console.error('Error fetching watchlist movies:', error);
      }
    };

    fetchWatchlistMovies();
  }, []);

  return (
    <div className={styles['watchlist-page']}>
      <h2 className={styles['page-title']}>Your Watchlist</h2>
      <Watchlist movies={watchlistMovies} />
    </div>
  );
};

export default WatchlistPage;
