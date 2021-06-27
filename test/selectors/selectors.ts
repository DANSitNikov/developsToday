import { GlobalState } from '../reducers/rootReducer';

export const getPosts = (state: GlobalState) => state.posts.posts;
export const getPostsStatus = (state: GlobalState) => state.posts.status;
export const getAddPostStatus = (state: GlobalState) => state.posts.addPostStatus;
