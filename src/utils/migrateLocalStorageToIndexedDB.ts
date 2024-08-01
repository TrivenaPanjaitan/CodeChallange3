// src/utils/migrateLocalStorageToIndexedDB.ts

import { saveToDB } from './indexedDBUtils';

// Function to migrate data
const migrateData = async () => {
  try {
    const watchedMovies = localStorage.getItem('watchedMovies');
    if (watchedMovies) {
      const data = JSON.parse(watchedMovies);
      await saveToDB('movie-app-db', data);
      console.log('Data successfully migrated to IndexedDB!');
    } else {
      console.log('No data found in localStorage.');
    }
  } catch (error) {
    console.error('Error migrating data:', error);
  }
};

migrateData();
