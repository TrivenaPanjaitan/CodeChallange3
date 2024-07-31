// src/api/axiosInstance.ts
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: 'Bearer yJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjI0NTQ2MGVmOGZhN2NkODczMTkzYjkyNTc1MjUxNSIsIm5iZiI6MTcyMjQ0NjgzNC45MTU4NTMsInN1YiI6IjY2YWE0YmU3ZjNiYzJlNDg3Yjg3ZmZiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IgSl8NfOV3HdkmZTVUi23ByldLv67DXypaLJw8x5cKs'
  }
});

export default axiosInstance;
