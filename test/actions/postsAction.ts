import { AddStatus, Post, Status } from '../reducers/postsReducer';
import { Dispatch } from 'redux';
import axios from 'axios';

const postsAction = {
    setPosts: (posts: Array<Post>) =>
        ({
            type: 'SET_POSTS',
            posts,
        } as const),
    addPost: (post: Post) =>
        ({
            type: 'ADD_POST',
            post,
        } as const),
    setStatus: (status: Status) =>
        ({
            type: 'SET_STATUS',
            status,
        } as const),
    addNewPostStatus: (status: AddStatus | null) =>
        ({
            type: 'ADD_NEW_POST_STATUS',
            status,
        } as const),
};

export const getPostsRequest = () => async (dispatch: Dispatch) => {
    const { setPosts, setStatus } = postsAction;
    try {
        const response = await axios.get('https://simple-blog-api.crew.red/posts');
        dispatch(setPosts(response.data.reverse() as Array<Post>));
        dispatch(setStatus(Status.OK));
    } catch (err) {
        console.error(err);
        dispatch(setStatus(Status.ERROR));
    }
};

export const publishNewPost = (title: string, body: string) => async (dispatch: Dispatch) => {
    const { addPost, addNewPostStatus } = postsAction;

    try {
        dispatch(addNewPostStatus(AddStatus.PENDING));
        const post = await axios.post('https://simple-blog-api.crew.red/posts', {
            title,
            body,
        });
        dispatch(addPost(post.data));
        dispatch(addNewPostStatus(AddStatus.OK));
    } catch (err) {
        console.error(err);
        dispatch(addNewPostStatus(AddStatus.ERROR));
    } finally {
        setTimeout(() => {
            dispatch(addNewPostStatus(null));
        }, 3000);
    }
};

export default postsAction;
