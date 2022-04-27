import { createActions } from "./actionCreator";

export const DELETE_CHARACTERS = 'DELETE_CHARACTERS';
export const GET_CHARACTERS_LIST = 'GET_CHARACTERS_LIST';

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

export const GET_DETAILS_CHARACTER = 'GET_DETAILS_CHARACTER';

export const {
    GET_DETAILS_CHARACTER_SUCCESS,
    GET_DETAILS_CHARACTER_FAILED,
    getDetailsCharacter,
    getDetailsCharacterSuccess,
    getDetailsCharacterFailed,
} = createActions(GET_DETAILS_CHARACTER)

export const SET_FAVORITE_CHARACTER = 'SET_FAVORITE_CHARACTER';

export const {
    GET_FAVORITE_CHARACTERS,
    setFavoriteCharacter,
    getFavoriteCharacters,
} = createActions(SET_FAVORITE_CHARACTER)



export const GET_SORT_CHARACTERS = 'GET_SORT_CHARACTERS';

export const {
    getSortCharacters,
} = createActions(GET_SORT_CHARACTERS)