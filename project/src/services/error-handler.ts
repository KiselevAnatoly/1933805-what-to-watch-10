import { store } from '../store';
import { setError} from '../store/user-process/user-process';
import { TIMEOUT_SHOW_ERROR } from '../constants';

export const processErrorHandle = (): void => {
  setTimeout(
    () => store.dispatch(setError(false)),
    TIMEOUT_SHOW_ERROR,
  );
};
