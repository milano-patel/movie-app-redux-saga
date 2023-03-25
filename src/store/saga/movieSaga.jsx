// Replace _YOUR API KEY_ parts with you own API key.
// Read README.md file for detailed instructions.

import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import {
  getMoviesFetch,
  getMoviesSuccess,
  getMoviesFailure,
} from '../slices/moviesSlice';

const API_URL =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=_YOUR API KEY_&page=';

const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=_YOUR API KEY_ &query="';

function fetchMovies(payload) {
  if (!payload) {
    return axios({
      method: 'get',
      url: API_URL,
    });
  } else {
    return axios({
      method: 'get',
      url: SEARCH_API + payload,
    });
  }
}

function* workerSaga(action) {
  try {
    const response = yield call(fetchMovies, action.payload);
    const movies = response.data;
    yield put(getMoviesSuccess(movies));
  } catch (error) {
    yield put(getMoviesFailure(error));
  }
}

export function* moviesSaga() {
  yield takeLatest(getMoviesFetch, workerSaga);
}

export default moviesSaga;
