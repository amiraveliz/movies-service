import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import MoviesService from '../services/MoviesService';

const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/original';

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
      state.isLoading = false;
      state.popularMovies = payload;
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
