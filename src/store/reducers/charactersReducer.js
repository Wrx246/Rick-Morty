import * as contentActions from '../actions/charactersActions';


const defaultState = {
    characters: [],
}


const charactersReducer = (state = defaultState, { type, payload }) => {
    switch (type) {
        case contentActions.GET_CHARACTERS_LIST:
        case contentActions.GET_CHARACTERS_LIST_SUCCESS: return { ...state, content: payload }
        default:
            return state
    }
}

export default charactersReducer;