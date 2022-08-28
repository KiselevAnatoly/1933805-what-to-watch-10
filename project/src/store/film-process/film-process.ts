import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../constants';
import { fetchFilm, fetchFilmComments, fetchSimilarFilms, addToFavorite } from '../api-actions';
import { Film } from '../../types/films';
import { ReviewType } from '../../types/comments';

type InitialState = {
  film: Film,
  similarFilms: Film[],
  filmComments: ReviewType[] | [],
  isDataLoaded: boolean;
}

const initialState: InitialState = {
  film: {} as Film,
  filmComments: [],
  similarFilms: [],
  isDataLoaded: false,
};

export const filmProcess = createSlice({
  name: NameSpace.Film,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilm.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchFilm.fulfilled, (state, action) => {
        state.film = action.payload;
        state.isDataLoaded = false;
      })
      .addCase(fetchSimilarFilms.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchSimilarFilms.fulfilled, (state, action) => {
        state.similarFilms = action.payload;
        state.isDataLoaded = false;
      })
      .addCase(fetchFilmComments.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchFilmComments.fulfilled, (state, action) => {
        state.filmComments = action.payload;
        state.isDataLoaded = false;
      })
      .addCase(addToFavorite.fulfilled, (state, action) => {
        if (state.film.id === action.payload.id) {
          state.film = action.payload;
        }
      });
  }
});