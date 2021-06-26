import { ActionsType } from './rootReducer';
import postsAction from '../actions/postsAction';

export interface Post {
    title: string;
    body: string;
    id: number;
}

const initialState = {
    posts: [] as Array<Post>,
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
        default:
            return state;
    }
};

export default postsReducer;
