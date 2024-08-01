import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';
import RatedMoviesPage from './pages/RatedMoviesPage';
import WatchlistPage from './pages/WatchlistPage';

const Router: React.FC = () => (
  <div>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movie/:movieId" element={<MoviePage />} />
      <Route path="/watchlist" element={<WatchlistPage />} />
      <Route path="/rated" element={<RatedMoviesPage />} />
    </Routes>
  </div>
);

export default Router;
