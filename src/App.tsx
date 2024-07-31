import React from 'react';
import MovieList from './components/MovieList';
import WatchedList from './components/WatchedList';

const App: React.FC = () => {
  return (
    <div>
      <h1>Movie Database</h1>
      <MovieList />
      <WatchedList />
    </div>
  );
};

export default App;
