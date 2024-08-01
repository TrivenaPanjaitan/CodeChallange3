// src/types/index.ts

export interface Movie {
    id: number;
    title: string;
    // Add other relevant fields
  }
  
  export interface SearchMoviesResponse {
    results: Movie[];
    // Include other properties if needed
  }
  