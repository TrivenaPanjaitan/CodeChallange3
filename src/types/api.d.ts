export interface Movie {
    id: number;
    title: string;
    release_date: string;
    poster_path: string;
    overview: string;
  }
  
  export interface MovieSearchResponse {
    results: Movie[];
  }
  
  export interface MovieDetail {
    id: number;
    title: string;
    release_date: string;
    poster_path: string;
    overview: string;
    // Add additional fields as needed
  }
  