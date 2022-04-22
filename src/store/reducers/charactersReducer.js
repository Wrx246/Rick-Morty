import * as contentActions from '../actions/charactersActions';


const defaultState = {
    characters: [],
    search: [],
    filter: []
}


const charactersReducer = (state = defaultState, { type, payload }) => {
    switch (type) {
        case contentActions.GET_CHARACTERS_LIST:
        case contentActions.GET_CHARACTERS_LIST_SUCCESS: return { ...state, characters: payload }

        case contentActions.GET_FILTER_CHARACTER:
        case contentActions.GET_FILTER_CHARACTER_SUCCESS: return { ...state, filter: payload }
        default:
            return state
    }
}

export default charactersReducer;