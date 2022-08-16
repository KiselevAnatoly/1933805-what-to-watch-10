import FilmCard from '../film-card/FilmCard';
import { useAppSelector, useAppDispatch } from '../../hooks/useDispatch';
import ShowMoreButton from '../show-more-button/show-more-button';
import { CARDS_PER_STEP } from '../../constants';
import { showMore } from '../../store/actions';
import { Film } from '../../types/films';

function FilmsListMain({ films }: { films: Film[] }): JSX.Element {
  const dispatch = useAppDispatch();
  const selectedGenre = useAppSelector((state) => state.genre);
  const renderedFilmCount = useAppSelector((state) => state.renderedFilmCount);
  const sortedFilms = films.filter((film) => selectedGenre === 'All genres' ? films : film.genre === selectedGenre);
  const onShowMoreBtnClick = () => {
    dispatch(showMore(renderedFilmCount + CARDS_PER_STEP));
  };

  const isShowBtn = renderedFilmCount < sortedFilms.length;

  const filmsList =
    sortedFilms?.slice(0, renderedFilmCount).map((film, index) => (
      <FilmCard key={film.id}
        film={film}
        index={index}
      />
    ));

  return (
    <>
      <div className="catalog__films-list">
        {filmsList}
      </div>
      {
        isShowBtn &&
        <ShowMoreButton onClick={onShowMoreBtnClick} />
      }
    </>
  );
}

export default FilmsListMain;
