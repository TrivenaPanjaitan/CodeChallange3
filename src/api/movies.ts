// src/api/movies.ts
import { WatchedMovie } from '../types/WatchedMovie';
import axiosInstance from './axiosInstance';

export const fetchMovies = async (query: string): Promise<WatchedMovie[]> => {
  try {
    const response = await axiosInstance.get(`/search/movie`, {
      params: {
        query: query
      }
    });
    return response.data.results as WatchedMovie[];
  } catch (error) {
    throw new Error('Error fetching movies');
  }
};

export const fetchMovieDetails = async (movieId: number): Promise<WatchedMovie> => {
  try {
    const response = await axiosInstance.get(`/movie/${movieId}`);
    return response.data as WatchedMovie;
  } catch (error) {
    throw new Error('Error fetching movie details');
  }
};