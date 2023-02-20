import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './slices/movies';

const reducer = {
  movies: moviesReducer,
};

const store = configureStore({
  reducer,
  devTools: true,
});

export default store;
