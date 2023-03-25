import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    data: {},
    isLoading: false,
    error: null,
    query: '',
  },
  reducers: {
    getMoviesFetch: (state, action) => {
      state.isLoading = true;
      state.query = action.payload;
    },
    getMoviesSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    getMoviesFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
  },
});

export const { getMoviesFetch, getMoviesSuccess, getMoviesFailure } =
  moviesSlice.actions;

export const moviesReducer = moviesSlice.reducer;
