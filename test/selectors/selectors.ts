import { GlobalState } from '../reducers/rootReducer';
import { AddStatus, Post, Status } from '../reducers/postsReducer';
import { Comment } from '../reducers/commentsReducer';

export const getPosts = (state: GlobalState): Array<Post> | null => state.posts.posts;
export const getPostsStatus = (state: GlobalState): Status | null => state.posts.status;
export const getAddPostStatus = (state: GlobalState): AddStatus | null => state.posts.addPostStatus;
export const getAddCommentStatus = (state: GlobalState): AddStatus | null => state.comments.addCommentStatus;
export const getComments = (state: GlobalState): Array<Comment> => state.comments.comments;
