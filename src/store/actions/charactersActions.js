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

export const GET_FILTER_CHARACTER = 'GET_FILTER_CHARACTER';

export const {
    GET_FILTER_CHARACTER_SUCCESS,
    GET_FILTER_CHARACTER_FAILED,
    getFilterCharacter,
    getFilterCharacterSuccess,
    getFilterCharacterFailed,
} = createActions(GET_FILTER_CHARACTER)
