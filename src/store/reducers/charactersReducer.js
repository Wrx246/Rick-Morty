import * as contentActions from '../actions/charactersActions';


const defaultState = {
    characters: [],
    details: [],
    filter: [],
    favorite: [],
    isFetching: true,
}


const charactersReducer = (state = defaultState, { type, payload }) => {
    switch (type) {
        case contentActions.GET_CHARACTERS_LIST: 
        case contentActions.GET_CHARACTERS_LIST_SUCCESS: return { ...state, characters: payload, isFetching: false }
        case contentActions.GET_CHARACTERS_LIST_FAILED: return { ...state, isFetching: true }

        case contentActions.GET_FILTER_CHARACTER:
        case contentActions.GET_FILTER_CHARACTER_SUCCESS: return { ...state, filter: payload }

        case contentActions.GET_DETAILS_CHARACTER:
        case contentActions.GET_DETAILS_CHARACTER_SUCCESS: return { ...state, details: payload, isFetching: false }
        case contentActions.GET_DETAILS_CHARACTER_FAILED: return { ...state, filter: true }

        case contentActions.SET_FAVORITE_CHARACTER: return { ...state, favorite: payload, isFetching: false }

        case contentActions.GET_SORT_CHARACTERS:
            return { ...state, favorite: state.favorite.slice().sort((a, b) => a[payload].toString().localeCompare(b[payload])) };
        default:
            return state
    }
}

export default charactersReducer;