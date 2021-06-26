import { combineReducers } from 'redux';

const rootReducer = combineReducers({});

type RootReducer = typeof rootReducer;
export type GlobalState = ReturnType<RootReducer>;

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never;
export type ActionsType<
    // eslint-disable-next-line no-unused-vars
    T extends { [key: string]: (...args: any[]) => any },
> = ReturnType<PropertiesType<T>>;

export default rootReducer;
