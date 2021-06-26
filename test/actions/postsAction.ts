import { Post } from '../reducers/postsReducer';
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
};

export const getPostsRequest = () => async (dispatch: Dispatch) => {
    const response = await axios.get('https://simple-blog-api.crew.red/posts');
    dispatch(postsAction.setPosts(response.data.reverse() as Array<Post>));
};

export const publishNewPost = (title: string, body: string) => async (dispatch: Dispatch) => {
    const post = await axios.post('https://simple-blog-api.crew.red/posts', {
        title,
        body,
    });

    console.log(post, 'new some time be');
};

export default postsAction;
