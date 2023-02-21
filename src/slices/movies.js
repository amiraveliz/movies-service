import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import MoviesService from '../services/MoviesService';

const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/original';
const IMAGES_BASE_URL_500 = 'https://image.tmdb.org/t/p/w500';

export const getPopularMovies = createAsyncThunk(
  'movies/getPopular',
  async () => {
    const {
      data: { results },
    } = await MoviesService.getPopular();
    return results;
  }
);

export const getFeaturedMovie = createAsyncThunk(
  'movies/getFeatured',
  async () => {
    const {
      data: { results },
    } = await MoviesService.getFeatured();
    return results[0]; // get only first movie
  }
);

const initialState = {
  popularMovies: [],
  myMovies: [],
  featuredMovie: {},
  isLoading: false,
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addPopular: (state, { payload }) => {
      const newMovie = {
        name: payload.text,
      };
      state.myMovies.push(newMovie);
    },
  },
  extraReducers: {
    [getPopularMovies.pending](state) {
      state.isLoading = true;
    },
    [getPopularMovies.fulfilled](state, { payload }) {
      payload = payload.slice(0, 4).map((movie) => {
        movie.backdrop500FullPath = `${IMAGES_BASE_URL_500}/${movie.backdrop_path}`;
        return movie;
      }); // only show first 4 items
      state.popularMovies = payload;
      state.isLoading = false;
    },
    [getPopularMovies.rejected](state) {
      state.isLoading = false;
    },
    [getFeaturedMovie.pending](state) {
      state.isLoading = true;
    },
    [getFeaturedMovie.fulfilled](state, { payload }) {
      const backdropFullPath = `${IMAGES_BASE_URL}/${payload.backdrop_path}`;
      payload = { ...payload, backdropFullPath };
      state.featuredMovie = payload;
      state.isLoading = false;
    },
    [getFeaturedMovie.rejected](state) {
      state.isLoading = false;
    },
  },
});

export const { addTask, toggleTask } = moviesSlice.actions;

export default moviesSlice.reducer;
