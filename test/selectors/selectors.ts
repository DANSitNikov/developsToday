import { GlobalState } from '../reducers/rootReducer';

export const getPosts = (state: GlobalState) => state.posts.posts;
