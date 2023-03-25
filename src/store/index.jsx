import { configureStore } from '@reduxjs/toolkit';
import { moviesReducer } from './slices/moviesSlice';
import createSagaMiddleware from '@redux-saga/core';
import movieSaga from './saga/movieSaga';
import { searchReducer } from './slices/searchSlice';
import { logger } from 'redux-logger';

const saga = createSagaMiddleware();

const middleware = [];
middleware.push(saga);
middleware.push(logger);

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    search: searchReducer,
  },
  middleware,
});

saga.run(movieSaga);
