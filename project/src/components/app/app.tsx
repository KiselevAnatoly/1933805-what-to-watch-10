import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../constants';
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

function App(): JSX.Element {
  const { isDataLoaded } = useAppSelector((state) => state);

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
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <MyList />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Film} element={<MoviePage />} />
        <Route path={AppRoute.AddReview}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
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
