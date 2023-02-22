import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/movie';
const CLOUDINARY_BASE_URL = 'https://api.cloudinary.com/v1_1/daqshc3o8/image';

// movies
const http = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

// custom for upload files
const cloudinaryHttp = axios.create({
  baseURL: CLOUDINARY_BASE_URL,
});

export { cloudinaryHttp, http };
