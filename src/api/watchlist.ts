// src/api/watchlist.ts
import axiosInstance from './axiosInstance';

interface WatchlistPayload {
  media_type: 'movie';
  media_id: number;
  watchlist: boolean;
}

export const addToWatchlist = async (accountId: number, payload: WatchlistPayload) => {
  try {
    await axiosInstance.post(`/account/${accountId}/watchlist`, payload);
  } catch (error) {
    throw new Error('Error adding to watchlist');
  }
};

export const removeFromWatchlist = async (accountId: number, payload: WatchlistPayload) => {
  try {
    await axiosInstance.post(`/account/${accountId}/watchlist`, payload);
  } catch (error) {
    throw new Error('Error removing from watchlist');
  }
};

export const fetchWatchlistMovies = async (accountId: number) => {
  try {
    const response = await axiosInstance.get(`/account/${accountId}/watchlist/movies`);
    return response.data.results;
  } catch (error) {
    throw new Error('Error fetching watchlist movies');
  }
};
