import { Film } from '../../types/films';
import FilmsList from '../films-list/FilmsList';

type SimilarFilmsProps = {
  similarFilms: Film[];
}

function SimilarFilms({ similarFilms }: SimilarFilmsProps): JSX.Element {
  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      {similarFilms.length > 0 ? <FilmsList films={similarFilms} /> : <p>Sorry, we did not find anything.</p>}
    </section>
  );
}

export default SimilarFilms;
