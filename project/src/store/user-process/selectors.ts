import { State } from '../../types/state';
import { NameSpace } from '../../constants';

export const selectAuth = (state: State) => state[NameSpace.User].authorizationStatus;
export const selectError = (state: State) => state[NameSpace.User].error;
export const selectAvatar = (state: State) => state[NameSpace.User].avatar;
