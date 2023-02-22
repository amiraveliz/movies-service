import { http, cloudinaryHttp } from '../http-common';

const API_KEY = '6f26fd536dd6192ec8a57e94141f8b20';
const CLOUDINARY_PRESENT_NAME = 'ehexf9gy';

const getPopular = () => http.get(`/popular?api_key=${API_KEY}`);

const getFeatured = () => http.get(`/now_playing?api_key=${API_KEY}`);

const uploadFile = (file, onUploadProgress) => {
  const formData = new FormData();

  formData.append('upload_preset', CLOUDINARY_PRESENT_NAME);
  formData.append('file', file);

  return cloudinaryHttp.post('/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    onUploadProgress,
  });
};

const MoviesService = {
  getPopular,
  getFeatured,
  uploadFile,
};

export default MoviesService;
