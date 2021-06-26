import { Post } from '../reducers/postsReducer';
import { Dispatch } from 'redux';
import axios from 'axios';

const postsAction = {
    setPosts: (posts: Array<Post>) =>
        ({
            type: 'SET_POSTS',
            posts,
        } as const),
};

export const getPostsRequest = () => async (dispatch: Dispatch) => {
    const response = await axios.get('https://simple-blog-api.crew.red/posts');
    dispatch(postsAction.setPosts(response.data as Array<Post>));
};

export default postsAction;
