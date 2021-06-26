import { useMemo } from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer, { ActionsType, GlobalState } from '../reducers/rootReducer';

let store: GlobalState | ActionsType<any>;

function initStore(initialState: GlobalState) {
    return createStore(rootReducer, initialState, applyMiddleware(thunkMiddleware));
}

export const initializeStore = (preloadedState: GlobalState) => {
    let _store = store ?? initStore(preloadedState);

    if (preloadedState && store) {
        _store = initStore({
            ...store.getState(),
            ...preloadedState,
        });

        store = undefined;
    }

    if (typeof window === 'undefined') return _store;

    if (!store) store = _store;

    return _store;
};

export function useStore(initialState: GlobalState) {
    const store = useMemo(() => initializeStore(initialState), [initialState]);
    return store;
}
