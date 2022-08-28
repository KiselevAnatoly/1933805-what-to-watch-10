import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../constants';
import { filmsProcess } from './films-process/films-process';
import { filmProcess } from './film-process/film-process';
import { userProcess } from './user-process/user-process';
import { promoFilmProcess } from './promo-film-process/promo-film-process';
import { addReviewProcess } from './add-review-process/add-review-process';

export const rootReducer = combineReducers({
  [NameSpace.Films]: filmsProcess.reducer,
  [NameSpace.Film]: filmProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.PromoFilm]: promoFilmProcess.reducer,
  [NameSpace.AddReview]: addReviewProcess.reducer,
});