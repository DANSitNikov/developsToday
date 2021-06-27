import { ActionsType } from './rootReducer';
import commentsAction from '../actions/commentsAction';
import { AddStatus, Status } from './postsReducer';

export interface Comment {
    body: string;
    id: number;
    postId: number;
}

const initialState = {
    comments: [] as Array<Comment>,
    status: null as null | Status,
    addCommentStatus: null as null | AddStatus,
};

type InitialState = typeof initialState;
type ActionType = ActionsType<typeof commentsAction>;

const commentsReducer = (state = initialState, action: ActionType): InitialState => {
    switch (action.type) {
        case 'SET_COMMENTS':
            return {
                ...state,
                comments: action.comments,
            };
        case 'ADD_NEW_COMMENT':
            return {
                ...state,
                comments: [action.comment, ...state.comments],
            };
        default:
            return state;
    }
};

export default commentsReducer;
