import { ActionsType } from './rootReducer';
import postsAction from '../actions/postsAction';

export enum Status {
    OK = 'OK',
    ERROR = 'ERROR',
}

export enum AddStatus {
    PENDING = 'PENDING',
    OK = 'OK',
    ERROR = 'ERROR',
}

export interface Post {
    title: string;
    body: string;
    id: number;
}

const initialState = {
    posts: [] as Array<Post>,
    status: null as null | Status,
    addPostStatus: null as null | AddStatus,
};

type InitialState = typeof initialState;
type ActionType = ActionsType<typeof postsAction>;

const postsReducer = (state = initialState, action: ActionType): InitialState => {
    switch (action.type) {
        case 'SET_POSTS':
            return {
                ...state,
                posts: action.posts,
            };
        case 'ADD_POST':
            return {
                ...state,
                posts: [action.post, ...state.posts],
            };
        case 'SET_STATUS':
            return {
                ...state,
                status: action.status,
            };
        case 'ADD_NEW_POST_STATUS':
            return {
                ...state,
                addPostStatus: action.status,
            };
        default:
            return state;
    }
};

export default postsReducer;
