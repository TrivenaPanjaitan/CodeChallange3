import { openDB } from 'idb';

const DB_NAME = 'movies-db';
const DB_VERSION = 1;
const STORE_NAME = 'watched-movies';

export const getWatchedMovies = async (): Promise<any[]> => {
  const db = await openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      db.createObjectStore(STORE_NAME, { keyPath: 'id' });
    },
  });
  return db.getAll(STORE_NAME);
};

export const addWatchedMovie = async (movie: any) => {
  const db = await openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      db.createObjectStore(STORE_NAME, { keyPath: 'id' });
    },
  });
  await db.put(STORE_NAME, movie);
};
