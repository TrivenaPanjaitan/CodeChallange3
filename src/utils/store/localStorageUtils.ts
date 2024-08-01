// localStorageUtils.ts
export const getWatchedMoviesFromLocalStorage = (): any[] => {
    const storedMovies = localStorage.getItem('watchedMovies');
    return storedMovies ? JSON.parse(storedMovies) : [];
  };
  
  export const setWatchedMoviesToLocalStorage = (movies: any[]) => {
    localStorage.setItem('watchedMovies', JSON.stringify(movies));
  };
  
  export const clearWatchedMoviesLocalStorage = () => {
    localStorage.removeItem('watchedMovies');
  };
  