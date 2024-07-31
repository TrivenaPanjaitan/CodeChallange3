// src/utils/offlineStorage.ts
import localforage from 'localforage';
import { WatchedMovie } from '../store/watchedMoviesSlice';

const watchedMoviesKey = 'watchedMovies';

export const saveWatchedMovies = async (movies: WatchedMovie[]) => {
  await localforage.setItem(watchedMoviesKey, movies);
};

export const getWatchedMovies = async (): Promise<WatchedMovie[]> => {
  const movies = await localforage.getItem<WatchedMovie[]>(watchedMoviesKey);
  return movies || [];
};
