import * as contentActions from '../actions/charactersActions';


const defaultState = {
    isLogin: false,
}


const authReducer = (state = defaultState, { type, payload }) => {
    switch (type) {
        case contentActions.SET_IS_LOGIN: return { ...state, isLogin: payload }
        default:
            return state
    }
}

export default authReducer;