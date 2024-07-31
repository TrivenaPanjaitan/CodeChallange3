import axios from 'axios';
import { Movie, MovieDetail, MovieSearchResponse } from '../types/api';

const API_KEY = process.env.REACT_APP_API_KEY;
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

if (!API_KEY || !API_BASE_URL) {
  throw new Error('API_KEY and API_BASE_URL must be defined in .env file');
}

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const response = await apiClient.get<MovieSearchResponse>('/search/movie', {
    params: { query },
  });
  return response.data.results;
};

export const fetchMovieDetails = async (id: number): Promise<MovieDetail> => {
  const response = await apiClient.get<MovieDetail>(`/movie/${id}`);
  return response.data;
};
