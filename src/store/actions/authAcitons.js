import { createActions } from "./actionCreator";

export const SET_IS_LOGIN = 'SET_IS_LOGIN';

export const {
    setIsLogin,
} = createActions(SET_IS_LOGIN)

export const IS_REGISTRATED = 'IS_REGISTRATED';

export const {
    isRegistrated,
} = createActions(IS_REGISTRATED)


