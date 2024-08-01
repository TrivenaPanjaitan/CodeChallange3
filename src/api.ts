import axios from 'axios';
 
const API_KEY = 'f6245460ef8fa7cd873193b9257515';
const BASE_URL = 'https://api.themoviedb.org/3';
const AUTH_HEADER = {
  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjI0NTQ2MGVmOGZhN2NkODczMTkzYjkyNTc1MjUxNSIsIm5iZiI6MTcyMjQ0NjgzNC45MTU4NTMsInN1YiI6IjY2YWE0YmU3ZjNiYzJlNDg3Yjg3ZmZiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IgSl8NfOV3HdkmZTVUi23ByldLv67DXypaLJw8x5cKs'
};
const accountId = 21415199

export const searchMovies = (query: string) =>
  axios.get(`${BASE_URL}/search/movie?query=${query}`, { headers: AUTH_HEADER });

export const getMovieDetails = (movieId: number) =>
  axios.get(`${BASE_URL}/movie/${movieId}`, { headers: AUTH_HEADER });

export const addToWatchlist = (mediaId: number) =>
  axios.post(
    `${BASE_URL}/account/${accountId}/watchlist`,
    {
      media_type: 'movie',
      media_id: mediaId,
      watchlist: true
    },
    { headers: AUTH_HEADER }
  );

export const removeFromWatchlist = (mediaId: number) =>
  axios.post(
    `${BASE_URL}/account/${accountId}/watchlist`,
    {
      media_type: 'movie',
      media_id: mediaId,
      watchlist: false
    },
    { headers: AUTH_HEADER }
  );

export const viewWatchlistMovies = () =>
  axios.get(`${BASE_URL}/account/${accountId}/watchlist/movies`, { headers: AUTH_HEADER });

export const addRating = (movieId: number, value: number) =>
  axios.post(
    `${BASE_URL}/movie/${movieId}/rating`,
    { value },
    { headers: AUTH_HEADER }
  );

export const deleteRating = (movieId: number) =>
  axios.delete(`${BASE_URL}/movie/${movieId}/rating`, { headers: AUTH_HEADER });

export const viewRatedMovies = () =>
  axios.get(`${BASE_URL}/account/${accountId}/rated/movies`, { headers: AUTH_HEADER });
