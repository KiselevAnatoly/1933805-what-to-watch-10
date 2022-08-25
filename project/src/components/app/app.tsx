import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../constants';
import MainPage from '../../pages/main-page/MainPage';
import LoginPage from '../../pages/login-page/LoginPage';
import MyList from '../../pages/my-list-page/MyListPage';
import MoviePage from '../../pages/movie-page/MoviePage';
import PlayerPage from '../../pages/player-page/PlayerPage';
import EmptyPage from '../../pages/empty-page/EmptyPage';
import PrivateRoute from '../private-route/PrivateRoute';
import AddReviewPage from '../../pages/add-review-page/AddReviewPage';
import { useAppSelector } from '../../hooks/useDispatch';
import LoadingPage from '../../pages/loading-page/loading-page';
import { selectLoadingDataStatus } from '../../store/films-process/selectors';
import { selectAuth } from '../../store/user-process/selectors';

function App(): JSX.Element {
  const isDataLoaded = useAppSelector(selectLoadingDataStatus);
  const authorizationStatus = useAppSelector(selectAuth);

  if (isDataLoaded) {
    return <LoadingPage />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main}
          element={<MainPage />}
        />
        <Route path={AppRoute.SignIn} element={<LoginPage />} />
        <Route path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={authorizationStatus}
            >
              <MyList />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Film} element={<MoviePage />} />
        <Route path={AppRoute.AddReview}
          element={
            <PrivateRoute
              authorizationStatus={authorizationStatus}
            >
              <AddReviewPage />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Player} element={<PlayerPage />} />
        <Route path="*" element={<EmptyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
