import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/movie';

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
});
