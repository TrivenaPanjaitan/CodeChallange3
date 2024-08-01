import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ErrorBoundary from './ErrorBoundary';
import { getPublicUrl } from './helpers/getPublicUrl';
import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';
import RatedMoviesPage from './pages/RatedMoviesPage';
import WatchlistPage from './pages/WatchlistPage';

const App: React.FC = () => {
  const baseUrl = getPublicUrl();

  return (
    <div>
      <Header />
      <ErrorBoundary>
        <Routes>
          <Route path={`${baseUrl}/`} element={<HomePage />} />
          <Route path={`${baseUrl}/movie/:movieId`} element={<MoviePage />} />
          <Route path={`${baseUrl}/watchlist`} element={<WatchlistPage />} />
          <Route path={`${baseUrl}/rated`} element={<RatedMoviesPage />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
};

export default App;
