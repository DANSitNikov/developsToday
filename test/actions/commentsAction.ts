import { Comment } from '../reducers/commentsReducer';
import { Dispatch } from 'redux';
import axios from 'axios';
import { AddStatus, Status } from '../reducers/postsReducer';

const commentsAction = {
    setComments: (comments: Array<Comment>) =>
        ({
            type: 'SET_COMMENTS',
            comments,
        } as const),
    addComment: (comment: Comment) =>
        ({
            type: 'ADD_NEW_COMMENT',
            comment,
        } as const),
    setStatus: (status: Status) =>
        ({
            type: 'SET_STATUS',
            status,
        } as const),
    addNewCommentStatus: (status: AddStatus | null) =>
        ({
            type: 'ADD_NEW_COMMENT_STATUS',
            status,
        } as const),
};

export const getCommentsRequest = () => async (dispatch: Dispatch) => {
    const { setComments, setStatus } = commentsAction;

    try {
        const response = await axios.get('https://simple-blog-api.crew.red/comments');
        dispatch(setComments(response.data.reverse() as Array<Comment>));
        dispatch(setStatus(Status.OK));
    } catch (err) {
        console.error(err);
        dispatch(setStatus(Status.ERROR));
    }
};

export const publishNewComment = (body: string, postId: number) => async (dispatch: Dispatch) => {
    const { addComment, addNewCommentStatus } = commentsAction;

    try {
        dispatch(addNewCommentStatus(AddStatus.PENDING));
        const comment = await axios.post('https://simple-blog-api.crew.red/comments', {
            body,
            postId,
        });
        dispatch(addComment(comment.data));
        dispatch(addNewCommentStatus(AddStatus.OK));
    } catch (err) {
        console.error(err);
        dispatch(addNewCommentStatus(AddStatus.ERROR));
    } finally {
        setTimeout(() => {
            dispatch(addNewCommentStatus(null));
        }, 2000);
    }
};

export default commentsAction;
