import http from '../http-common';

const API_KEY = '6f26fd536dd6192ec8a57e94141f8b20';

const getPopular = () => http.get(`/popular?api_key=${API_KEY}`);

const getFeatured = () => http.get(`/now_playing?api_key=${API_KEY}`);

const MoviesService = {
  getPopular,
  getFeatured,
};

export default MoviesService;
