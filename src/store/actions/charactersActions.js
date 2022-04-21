import { createActions } from "./actionCreator";

export const DELETE_CHARACTERS = 'DELETE_CHARACTERS';
export const GET_CHARACTERS_LIST = 'GET_CHARACTERS_LIST'

export const {
    GET_CHARACTERS_LIST_SUCCESS,
    GET_CHARACTERS_LIST_FAILED,
    getCharactersList,
    getCharactersListSuccess,
    getCharactersListFailed,
} = createActions(GET_CHARACTERS_LIST);
