// atoms.ts
import { atom } from 'jotai';
import { getWatchedMoviesFromLocalStorage, setWatchedMoviesToLocalStorage } from './localStorageUtils';

export const watchedMoviesAtom = atom(getWatchedMoviesFromLocalStorage());

export const updateWatchedMoviesAtom = atom(
  (get) => get(watchedMoviesAtom),
  (get, set, newMovies: any[]) => {
    set(watchedMoviesAtom, newMovies);
    setWatchedMoviesToLocalStorage(newMovies); // Save changes to local storage
  }
);
